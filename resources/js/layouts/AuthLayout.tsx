import React from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { t, isRTL } = useTranslation();

    return (
        <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-6 ${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="absolute top-4 right-4 flex items-center gap-4">
                <LanguageToggle />
                <ThemeToggle />
            </div>

            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                EduForms
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                {t('Teacher and Admin Assistant')}
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Auth Card */}
                <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
                    {children}
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                    >
                        ← {t('Back to Home')}
                    </Link>
                </div>
            </div>
        </div>
    );
}