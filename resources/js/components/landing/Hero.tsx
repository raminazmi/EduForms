import React from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="max-w-7xl mx-auto text-center relative">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                    <SparklesIcon className="w-4 h-4" />
                    {t('Believing in the importance of time for teachers and administrators')}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                    <span className="block">{t('Teacher\'s Friend')}</span>
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('and Administrator')}
                    </span>
                </h1>

                <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
                    {t('We provided you with concise reports that make it easier for you')}
                </p>
                <p className="text-lg text-blue-600 mb-8 max-w-3xl mx-auto font-medium">
                    {t('Work, development and speed of completion, all directly from your mobile! ✨ 📱')}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    <Link
                        href={route('register')}
                        className="px-10 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg transition-all"
                    >
                        {t('Start Free')}
                    </Link>
                    <Link
                        href="#features"
                        className="px-10 py-4 text-lg border-2 border-blue-200 hover:bg-blue-50 text-blue-600 rounded-lg font-medium shadow-lg transition-all"
                    >
                        {t('Learn More')}
                    </Link>
                </div>

                {/* Hero Images */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
                                alt={t('Teacher using the app')}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-center mt-4 font-medium text-gray-700">
                                {t('From your computer')}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                                alt={t('Mobile app')}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-center mt-4 font-medium text-gray-700">
                                {t('From your mobile')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}