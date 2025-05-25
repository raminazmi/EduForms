import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pricingPlans } from "@/data/pricingData";
import MadaLogo from "@/assets/payment-icons/mada.svg";
import VisaLogo from "@/assets/payment-icons/visa.svg";
import MastercardLogo from "@/assets/payment-icons/mastercard.svg";
import GCCNetworkLogo from "@/assets/payment-icons/gcc-network.svg";
import ApplePayLogo from "@/assets/payment-icons/apple-pay.svg";
import SARCurrencyWhite from "@/assets/payment-icons/sar-currency(white).svg";

export default function Pricing() {
  const paymentMethods = [
    { name: "فيزا", logo: <img src={VisaLogo} alt="Visa" className="h-8 w-8" /> },
    { name: "ماستركارد", logo: <img src={MastercardLogo} alt="Mastercard" className="h-8 w-8" /> },
    { name: "مدى", logo: <img src={MadaLogo} alt="Mada" className="h-8 w-8" /> },
    { name: "الشبكة الخليجية", logo: <img src={GCCNetworkLogo} alt="GCC Network" className="h-8 w-auto" /> },
    { name: "Apple Pay", logo: <img src={ApplePayLogo} alt="Apple Pay" className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
            تخفيضات %50 على الباقة السنوية لفترة محدودة
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">الباقات والأسعار</h1>
          <p className="text-xl text-gray-600 mb-8">اختر الباقة التي تناسب احتياجاتك واستمتع بتوفير الوقت والجهد</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center relative overflow-hidden ${plan.popular ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="bg-red-500 text-white py-3 px-4 font-bold">
                    الأكثر شعبية - خصم %50
                  </div>
                )}
                {plan.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                    {plan.discount}
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-r ${plan.color} text-white`}>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-center">
                    {plan.originalPrice && (
                      <div className="text-lg line-through opacity-70 mb-2 flex justify-center items-center gap-2">
                        <p>{plan.originalPrice}</p> <img src={SARCurrencyWhite} alt="SAR" className="h-8 w-auto" />
                      </div>
                    )}
                    <div className="text-5xl font-bold flex justify-center items-center gap-2">
                      <p>{plan.price}</p>
                      <span className="text-lg mr-2"><img src={SARCurrencyWhite} alt="SAR" className="h-8 w-auto" /></span>
                    </div>
                    <p className="opacity-90 mt-2">{plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-right">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-bold py-3 text-lg`}
                  >
                    {plan.price === "0" ? "ابدأ مجاناً" : "اختيار الباقة"}
                  </Button>
                  {plan.popular && (
                    <p className="text-sm text-gray-500 mt-3">يمكنك الإلغاء في أي وقت</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">طرق الدفع المتاحة</h2>
          <p className="text-lg text-gray-600 mb-8">ادفع بأمان وسهولة باستخدام الطريقة التي تناسبك</p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-lg shadow-md">
                <span className="text-2xl">{method.logo}</span>
                <span className="font-medium text-gray-700">{method.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-600">
            <CreditCard className="w-5 h-5" />
            <span>جميع المعاملات محمية ومشفرة بأعلى معايير الأمان</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">الأسئلة الشائعة</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">هل يمكنني تغيير الباقة في أي وقت؟</h3>
              <p className="text-gray-600">نعم، يمكنك ترقية أو خفض باقتك في أي وقت. التغييرات ستدخل حيز التنفيذ في دورة الفوترة التالية.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">هل هناك رسوم إضافية مخفية؟</h3>
              <p className="text-gray-600">لا، الأسعار المعروضة شاملة لجميع الميزات المذكورة في كل باقة. لا توجد رسوم إضافية أو مخفية.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">كيف يمكنني إلغاء اشتراكي؟</h3>
              <p className="text-gray-600">يمكنك إلغاء اشتراكك في أي وقت من خلال إعدادات حسابك. ستتمكن من استخدام الخدمة حتى نهاية فترة الاشتراك المدفوعة.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">ابدأ رحلتك مع EduForms اليوم</h2>
          <p className="text-xl mb-8 opacity-95">
            انضم إلى آلاف المعلمين الذين وفروا الوقت والجهد مع EduForms
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
              ابدأ مجاناً الآن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}