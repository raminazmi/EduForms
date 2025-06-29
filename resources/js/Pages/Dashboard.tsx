import React from 'react';
import { Head } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import DashboardLayout from '@/layouts/DashboardLayout';
import StatsGrid from '@/components/dashboard/StatsGrid';
import RecentReports from '@/components/dashboard/RecentReports';
import QuickActions from '@/components/dashboard/QuickActions';
import SubscriptionStatus from '@/components/dashboard/SubscriptionStatus';

interface DashboardProps {
    stats: {
        totalReports: number;
        completedReports: number;
        templatesUsed: number;
        exportsThisMonth: number;
    };
    recentReports: any[];
    subscription: any;
}

export default function Dashboard({ stats, recentReports, subscription }: DashboardProps) {
    const { t } = useTranslation();

    return (
        <DashboardLayout>
            <Head title={t('Dashboard')} />

            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {t('Dashboard')}
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {t('Welcome back! Here\'s what\'s happening with your reports.')}
                    </p>
                </div>

                {/* Subscription Status */}
                <SubscriptionStatus subscription={subscription} />

                {/* Stats Grid */}
                <StatsGrid stats={stats} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Reports */}
                    <div className="lg:col-span-2">
                        <RecentReports reports={recentReports} />
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <QuickActions />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}