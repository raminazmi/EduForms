import React from 'react';
import { router } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageToggle() {
    const { locale } = useTranslation();

    const toggleLanguage = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        router.get(route('locale.switch', { locale: newLocale }));
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
            <GlobeAltIcon className="h-5 w-5" />
            <span>{locale === 'ar' ? 'EN' : 'العربية'}</span>
        </button>
    );
}