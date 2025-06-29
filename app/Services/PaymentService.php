<?php

namespace App\Services;

use App\Models\Payment;
use App\Models\SubscriptionPlan;
use App\Models\User;
use App\Models\UserSubscription;
use Stripe\StripeClient;
use Carbon\Carbon;

class PaymentService
{
    protected $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(config('services.stripe.secret'));
    }

    public function createPaymentIntent(array $data)
    {
        $paymentIntent = $this->stripe->paymentIntents->create([
            'amount' => $data['amount'],
            'currency' => $data['currency'],
            'payment_method_types' => $this->getPaymentMethodTypes($data['payment_method']),
            'metadata' => [
                'user_id' => $data['user']->id,
                'plan_id' => $data['plan']->id,
                'plan_name' => $data['plan']->name,
            ],
        ]);

        // Create payment record
        Payment::create([
            'user_id' => $data['user']->id,
            'subscription_plan_id' => $data['plan']->id,
            'payment_id' => $paymentIntent->id,
            'amount' => $data['plan']->price,
            'currency' => strtoupper($data['currency']),
            'status' => 'pending',
            'payment_method' => $data['payment_method'],
            'gateway' => 'stripe',
        ]);

        return $paymentIntent;
    }

    public function confirmPayment(string $paymentIntentId, User $user, SubscriptionPlan $plan)
    {
        try {
            $paymentIntent = $this->stripe->paymentIntents->retrieve($paymentIntentId);

            if ($paymentIntent->status === 'succeeded') {
                // Create or update subscription
                $subscription = $this->createSubscription($user, $plan, $paymentIntent);

                return [
                    'success' => true,
                    'subscription' => $subscription,
                ];
            } else {
                return [
                    'success' => false,
                    'message' => 'Payment not completed',
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    protected function createSubscription(User $user, SubscriptionPlan $plan, $paymentIntent)
    {
        // Cancel any existing active subscriptions
        $user->subscriptions()
            ->where('status', 'active')
            ->update(['status' => 'cancelled', 'cancelled_at' => now()]);

        // Calculate subscription period
        $startsAt = now();
        $endsAt = null;

        if ($plan->billing_cycle === 'monthly') {
            $endsAt = $startsAt->copy()->addMonth();
        } elseif ($plan->billing_cycle === 'yearly') {
            $endsAt = $startsAt->copy()->addYear();
        }
        // For lifetime, endsAt remains null

        return UserSubscription::create([
            'user_id' => $user->id,
            'subscription_plan_id' => $plan->id,
            'status' => 'active',
            'starts_at' => $startsAt,
            'ends_at' => $endsAt,
            'amount_paid' => $plan->price,
            'payment_method' => $paymentIntent->payment_method_types[0] ?? 'card',
            'transaction_id' => $paymentIntent->id,
            'payment_details' => $paymentIntent,
        ]);
    }

    protected function getPaymentMethodTypes(string $method): array
    {
        $methodMap = [
            'visa' => ['card'],
            'mastercard' => ['card'],
            'mada' => ['card'],
            'apple_pay' => ['card', 'apple_pay'],
        ];

        return $methodMap[$method] ?? ['card'];
    }

    public function handleWebhook(string $payload, string $signature)
    {
        return \Stripe\Webhook::constructEvent(
            $payload,
            $signature,
            config('services.stripe.webhook_secret')
        );
    }
}