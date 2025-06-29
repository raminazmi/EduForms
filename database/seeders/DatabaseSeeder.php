<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            SubscriptionPlanSeeder::class,
            TemplateCategorySeeder::class,
            TemplateSeeder::class,
            UserSeeder::class,
        ]);
    }
}