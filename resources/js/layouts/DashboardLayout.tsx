import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    UserIcon,
    ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { t, isRTL } = useTranslation();
    const { props } = usePage();
    const user = props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: t('Dashboard'), href: route('dashboard'), icon: HomeIcon },
        { name: t('Templates'), href: route('templates.index'), icon: DocumentTextIcon },
        { name: t('Reports'), href: route('reports.index'), icon: DocumentTextIcon },
        { name: t('Settings'), href: route('settings'), icon: Cog6ToothIcon },
    ];

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
                <div className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} flex w-64 flex-col bg-white dark:bg-gray-800 shadow-xl`}>
                    <div className="flex h-16 items-center justify-between px-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">EduForms</span>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className={`hidden lg:fixed lg:inset-y-0 ${isRTL ? 'lg:right-0' : 'lg:left-0'} lg:flex lg:w-64 lg:flex-col`}>
                <div className="flex flex-col flex-1 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                    <div className="flex h-16 items-center px-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">EduForms</span>
                        </Link>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className={`lg:${isRTL ? 'pr-64' : 'pl-64'}`}>
                {/* Top bar */}
                <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>

                        <div className="flex items-center gap-4">
                            <LanguageToggle />
                            <ThemeToggle />
                            
                            {/* User menu */}
                            <div className="relative">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                            {user?.name?.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="hidden sm:block">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            {user?.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}