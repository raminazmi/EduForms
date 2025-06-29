<?php

namespace Tests\Feature;

use App\Models\SubscriptionPlan;
use App\Models\User;
use App\Models\UserSubscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubscriptionTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_subscribe_to_free_plan()
    {
        $user = User::factory()->create();
        $plan = SubscriptionPlan::factory()->create([
            'price' => 0,
            'billing_cycle' => 'lifetime',
        ]);

        $response = $this->actingAs($user)->post('/subscriptions/subscribe', [
            'plan_id' => $plan->id,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('user_subscriptions', [
            'user_id' => $user->id,
            'subscription_plan_id' => $plan->id,
            'status' => 'active',
        ]);
    }

    public function test_user_subscription_limits_are_enforced()
    {
        $user = User::factory()->create();
        $plan = SubscriptionPlan::factory()->create([
            'template_limit' => 1,
            'export_limit' => 5,
        ]);
        
        $subscription = UserSubscription::factory()->create([
            'user_id' => $user->id,
            'subscription_plan_id' => $plan->id,
            'status' => 'active',
            'templates_used' => 1,
            'exports_used' => 5,
        ]);

        $this->assertFalse($subscription->canUseTemplate());
        $this->assertFalse($subscription->canExport());
    }
}