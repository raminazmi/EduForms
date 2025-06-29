import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const { t, isRTL } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: t('Features'), href: '#features' },
        { name: t('Pricing'), href: '#pricing' },
        { name: t('Contact'), href: route('contact') },
        { name: t('About'), href: route('about') },
    ];

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                EduForms
                            </h1>
                            <p className="text-sm text-gray-600 font-medium">
                                {t('Teacher and Admin Assistant')}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageToggle />
                        <ThemeToggle />
                        <Link
                            href={route('login')}
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            {t('Login')}
                        </Link>
                        <Link
                            href={route('register')}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
                        >
                            {t('Register')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="flex flex-col gap-4 mt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 mt-4">
                                <LanguageToggle />
                                <ThemeToggle />
                            </div>
                            <div className="flex flex-col gap-3 mt-4">
                                <Link
                                    href={route('login')}
                                    className="text-center py-2 border border-blue-200 rounded-lg hover:bg-blue-50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('Login')}
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t('Register')}
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}