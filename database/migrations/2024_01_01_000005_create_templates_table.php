<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->foreignId('category_id')->constrained('template_categories')->onDelete('cascade');
            $table->json('structure'); // Template structure/layout
            $table->json('default_data')->nullable(); // Default field values
            $table->string('preview_image')->nullable();
            $table->integer('image_slots')->default(1); // Number of image slots
            $table->boolean('has_barcode')->default(false);
            $table->enum('orientation', ['portrait', 'landscape'])->default('portrait');
            $table->string('paper_size', 10)->default('A4');
            $table->boolean('is_premium')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('usage_count')->default(0);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('templates');
    }
};