<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'template_id',
        'title',
        'data',
        'images',
        'barcode_data',
        'status',
        'last_exported_at',
        'export_count',
    ];

    protected $casts = [
        'data' => 'array',
        'images' => 'array',
        'last_exported_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function template()
    {
        return $this->belongsTo(Template::class);
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function markAsCompleted()
    {
        $this->update(['status' => 'completed']);
    }

    public function incrementExportCount()
    {
        $this->increment('export_count');
        $this->update(['last_exported_at' => now()]);
    }
}