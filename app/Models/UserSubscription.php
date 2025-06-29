<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class UserSubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subscription_plan_id',
        'status',
        'starts_at',
        'ends_at',
        'cancelled_at',
        'amount_paid',
        'payment_method',
        'transaction_id',
        'payment_details',
        'templates_used',
        'exports_used',
    ];

    protected $casts = [
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'cancelled_at' => 'datetime',
        'amount_paid' => 'decimal:2',
        'payment_details' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subscriptionPlan()
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active')
            ->where('starts_at', '<=', now())
            ->where(function ($q) {
                $q->whereNull('ends_at')
                  ->orWhere('ends_at', '>', now());
            });
    }

    public function isActive(): bool
    {
        return $this->status === 'active' &&
               $this->starts_at <= now() &&
               ($this->ends_at === null || $this->ends_at > now());
    }

    public function isExpired(): bool
    {
        return $this->ends_at && $this->ends_at < now();
    }

    public function daysRemaining(): int
    {
        if (!$this->ends_at) {
            return -1; // Unlimited
        }

        return max(0, now()->diffInDays($this->ends_at, false));
    }

    public function canUseTemplate(): bool
    {
        $plan = $this->subscriptionPlan;
        return $plan->template_limit === null || $this->templates_used < $plan->template_limit;
    }

    public function canExport(): bool
    {
        $plan = $this->subscriptionPlan;
        return $plan->export_limit === null || $this->exports_used < $plan->export_limit;
    }
}