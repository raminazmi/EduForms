import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';
import { CheckIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import PaymentModal from '@/components/PaymentModal';

interface PricingProps {
    plans: any[];
    user?: any;
}

export default function Pricing({ plans, user }: PricingProps) {
    const { t } = useTranslation();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleSelectPlan = (plan: any) => {
        if (!user) {
            router.visit(route('login'));
            return;
        }

        if (plan.price === 0) {
            // Handle free plan
            router.post(route('subscriptions.subscribe'), {
                plan_id: plan.id,
            });
        } else {
            setSelectedPlan(plan);
            setShowPaymentModal(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
            <Head title={t('Pricing')} />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('Choose Your Plan')}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {t('Select the perfect plan for your educational needs')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                                plan.is_popular
                                    ? 'border-blue-500 scale-105'
                                    : 'border-gray-200 hover:border-blue-300'
                            }`}
                        >
                            {plan.is_popular && (
                                <div className="bg-blue-500 text-white text-center py-2 rounded-t-2xl font-medium">
                                    {t('Most Popular')}
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {plan.price === 0 ? t('Free') : `${plan.price} SAR`}
                                    </span>
                                    {plan.price > 0 && (
                                        <span className="text-gray-600">
                                            /{plan.billing_cycle === 'monthly' ? t('month') : t('year')}
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{t(feature)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleSelectPlan(plan)}
                                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                                        plan.is_popular
                                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                    }`}
                                >
                                    {plan.price === 0 ? t('Start Free') : t('Choose Plan')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Payment Methods */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        {t('Accepted Payment Methods')}
                    </h3>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                            <CreditCardIcon className="h-6 w-6 text-blue-500" />
                            <span className="font-medium">Visa</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                            <CreditCardIcon className="h-6 w-6 text-red-500" />
                            <span className="font-medium">Mastercard</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                            <CreditCardIcon className="h-6 w-6 text-green-500" />
                            <span className="font-medium">Mada</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                            <CreditCardIcon className="h-6 w-6 text-gray-700" />
                            <span className="font-medium">Apple Pay</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && selectedPlan && (
                <PaymentModal
                    plan={selectedPlan}
                    onClose={() => setShowPaymentModal(false)}
                    onSuccess={() => {
                        setShowPaymentModal(false);
                        router.visit(route('dashboard'));
                    }}
                />
            )}
        </div>
    );
}