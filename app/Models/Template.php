<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category_id',
        'structure',
        'default_data',
        'preview_image',
        'image_slots',
        'has_barcode',
        'orientation',
        'paper_size',
        'is_premium',
        'is_active',
        'usage_count',
        'sort_order',
    ];

    protected $casts = [
        'structure' => 'array',
        'default_data' => 'array',
        'has_barcode' => 'boolean',
        'is_premium' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(TemplateCategory::class, 'category_id');
    }

    public function reports()
    {
        return $this->hasMany(UserReport::class);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFree($query)
    {
        return $query->where('is_premium', false);
    }

    public function scopePremium($query)
    {
        return $query->where('is_premium', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function incrementUsage()
    {
        $this->increment('usage_count');
    }
}