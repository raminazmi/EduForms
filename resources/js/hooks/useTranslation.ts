import { usePage } from '@inertiajs/react';

export function useTranslation() {
    const { props } = usePage();
    const translations = props.translations as Record<string, string>;
    const locale = props.locale as string;

    const t = (key: string, fallback?: string): string => {
        return translations[key] || fallback || key;
    };

    const isRTL = locale === 'ar';

    return { t, locale, isRTL };
}