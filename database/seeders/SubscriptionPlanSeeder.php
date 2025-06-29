<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Free Plan',
                'slug' => 'free',
                'description' => 'Basic access with limited features',
                'price' => 0,
                'billing_cycle' => 'lifetime',
                'template_limit' => 1,
                'export_limit' => 10,
                'features' => [
                    'access_to_1_template',
                    'pdf_png_export',
                    'basic_support'
                ],
                'is_popular' => false,
                'sort_order' => 1,
            ],
            [
                'name' => 'Monthly Plan',
                'slug' => 'monthly',
                'description' => 'Full access for one month',
                'price' => 15,
                'billing_cycle' => 'monthly',
                'template_limit' => 4,
                'export_limit' => null,
                'features' => [
                    'access_to_4_templates',
                    'unlimited_exports',
                    'barcode_support',
                    'priority_support'
                ],
                'is_popular' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Yearly Plan',
                'slug' => 'yearly',
                'description' => 'Best value - full access for one year',
                'price' => 70,
                'billing_cycle' => 'yearly',
                'template_limit' => null,
                'export_limit' => null,
                'features' => [
                    'access_to_all_templates',
                    'unlimited_exports',
                    'barcode_support',
                    'priority_support',
                    'custom_branding'
                ],
                'is_popular' => false,
                'sort_order' => 3,
            ],
        ];

        foreach ($plans as $plan) {
            SubscriptionPlan::create($plan);
        }
    }
}