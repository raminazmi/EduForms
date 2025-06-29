<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use App\Services\PaymentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    protected $paymentService;

    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    public function checkout(Request $request, SubscriptionPlan $plan)
    {
        $request->validate([
            'payment_method' => 'required|string|in:visa,mastercard,mada,apple_pay',
        ]);

        try {
            $paymentIntent = $this->paymentService->createPaymentIntent([
                'amount' => $plan->price * 100, // Convert to cents
                'currency' => 'sar',
                'payment_method' => $request->payment_method,
                'user' => $request->user(),
                'plan' => $plan,
            ]);

            return response()->json([
                'client_secret' => $paymentIntent->client_secret,
                'payment_id' => $paymentIntent->id,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Payment initialization failed',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function confirm(Request $request)
    {
        $request->validate([
            'payment_intent_id' => 'required|string',
            'plan_id' => 'required|exists:subscription_plans,id',
        ]);

        try {
            $result = $this->paymentService->confirmPayment(
                $request->payment_intent_id,
                $request->user(),
                SubscriptionPlan::find($request->plan_id)
            );

            if ($result['success']) {
                return response()->json([
                    'success' => true,
                    'subscription' => $result['subscription'],
                    'message' => 'Payment successful! Your subscription is now active.',
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => $result['message'],
                ], 400);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Payment confirmation failed',
            ], 500);
        }
    }

    public function webhook(Request $request)
    {
        $payload = $request->getContent();
        $signature = $request->header('Stripe-Signature');

        try {
            $event = $this->paymentService->handleWebhook($payload, $signature);
            
            switch ($event->type) {
                case 'payment_intent.succeeded':
                    $this->handlePaymentSuccess($event->data->object);
                    break;
                case 'payment_intent.payment_failed':
                    $this->handlePaymentFailure($event->data->object);
                    break;
                case 'invoice.payment_succeeded':
                    $this->handleSubscriptionRenewal($event->data->object);
                    break;
            }

            return response()->json(['status' => 'success']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    protected function handlePaymentSuccess($paymentIntent)
    {
        $payment = Payment::where('payment_id', $paymentIntent->id)->first();
        
        if ($payment) {
            $payment->update([
                'status' => 'completed',
                'paid_at' => now(),
                'gateway_response' => $paymentIntent,
            ]);

            // Activate subscription
            $subscription = UserSubscription::where('user_id', $payment->user_id)
                ->where('subscription_plan_id', $payment->subscription_plan_id)
                ->latest()
                ->first();

            if ($subscription) {
                $subscription->update(['status' => 'active']);
            }
        }
    }

    protected function handlePaymentFailure($paymentIntent)
    {
        $payment = Payment::where('payment_id', $paymentIntent->id)->first();
        
        if ($payment) {
            $payment->update([
                'status' => 'failed',
                'gateway_response' => $paymentIntent,
            ]);
        }
    }

    protected function handleSubscriptionRenewal($invoice)
    {
        // Handle subscription renewal logic
    }
}