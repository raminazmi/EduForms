import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/Footer';

export default function Welcome() {
    const { t, isRTL } = useTranslation();

    return (
        <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ${isRTL ? 'rtl' : 'ltr'}`}>
            <Head title={t('Welcome')} />
            
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
}