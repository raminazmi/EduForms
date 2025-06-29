import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import {
    DocumentTextIcon,
    CheckCircleIcon,
    TemplateIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

interface StatsGridProps {
    stats: {
        totalReports: number;
        completedReports: number;
        templatesUsed: number;
        exportsThisMonth: number;
    };
}

export default function StatsGrid({ stats }: StatsGridProps) {
    const { t } = useTranslation();

    const statItems = [
        {
            name: t('Total Reports'),
            value: stats.totalReports,
            icon: DocumentTextIcon,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            name: t('Completed Reports'),
            value: stats.completedReports,
            icon: CheckCircleIcon,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            name: t('Templates Used'),
            value: stats.templatesUsed,
            icon: TemplateIcon,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100',
        },
        {
            name: t('Exports This Month'),
            value: stats.exportsThisMonth,
            icon: ArrowDownTrayIcon,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statItems.map((item) => (
                <div
                    key={item.name}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
                >
                    <div className="flex items-center">
                        <div className={`p-3 rounded-lg ${item.bgColor} dark:bg-opacity-20`}>
                            <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {item.name}
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {item.value}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}