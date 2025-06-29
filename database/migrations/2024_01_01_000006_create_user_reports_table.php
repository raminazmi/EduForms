<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('template_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->json('data'); // User-filled data
            $table->json('images')->nullable(); // Uploaded images
            $table->string('barcode_data')->nullable();
            $table->enum('status', ['draft', 'completed'])->default('draft');
            $table->timestamp('last_exported_at')->nullable();
            $table->integer('export_count')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_reports');
    }
};