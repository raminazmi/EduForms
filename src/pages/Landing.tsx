import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, PenTool, Download, Zap, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { features } from "@/data/featuresData";
import { pricingPlans } from "@/data/pricingData";
import MadaLogo from "@/assets/payment-icons/mada.svg";
import VisaLogo from "@/assets/payment-icons/visa.svg";
import MastercardLogo from "@/assets/payment-icons/mastercard.svg";
import GCCNetworkLogo from "@/assets/payment-icons/gcc-network.svg";
import ApplePayLogo from "@/assets/payment-icons/apple-pay.svg";
import SARCurrencyWhite from "@/assets/payment-icons/sar-currency(white).svg";

export default function Landing() {

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
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-8">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            إيماناً بأهمية الوقت لدى المعلم والإداري في التعليم
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block">صديق المعلم</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              والإداري
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            وفرنا لكم تقارير مختصرة تسهّل عليك
          </p>
          <p className="text-lg text-blue-600 mb-8 max-w-3xl mx-auto font-medium">
            العمل والتطوير وسرعة الإنجاز، كل ذلك مباشرة من جوالك! ✨ 📱
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/signup">
              <Button size="lg" className="px-10 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                ابدأ رحلتك مجاناً
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 border-blue-200 hover:bg-blue-50 text-blue-600  shadow-lg">
                تعرف على المزيد
              </Button>
            </Link>
          </div>

          {/* Hero Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
                  alt="معلم يستخدم التطبيق"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-4 font-medium text-gray-700">من حاسوبك</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                  alt="تطبيق الجوال"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-4 font-medium text-gray-700">من جوالك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ميزات EduForms المتطورة</h2>
            <p className="text-xl text-gray-600">كل ما تحتاجه لإنشاء وإدارة النماذج التعليمية بسهولة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">طرق الدفع المتاحة</h2>
          <p className="text-lg text-gray-600 mb-8">ادفع بأمان وسهولة باستخدام الطريقة التي تناسبك</p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-6">
              تخفيضات %50 على الباقة السنوية لفترة محدودة
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الباقات والأسعار</h2>
            <p className="text-xl text-gray-600">اختر الباقة التي تناسب احتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center relative overflow-hidden ${plan.popular ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="bg-red-500 text-white py-3 px-4 font-bold">
                    عرض جديد لفترة محدودة خصم %70
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
                        <p>{plan.originalPrice}</p> <img src={SARCurrencyWhite} alt="SAR" className="h-5 w-auto" />
                      </div>
                    )}
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-5xl font-bold">{plan.price}</p>
                      <p className="opacity-90 mt-2">{plan.period}</p>
                    </div>
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
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-bold py-3`}
                  >
                    {plan.price === "0" ? "ابدأ مجاناً" : "اختيار الباقة"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-6">ابدأ رحلتك مع EduForms اليوم</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            انضم إلى آلاف المعلمين والإداريين الذين يثقون في EduForms لإنشاء وإدارة النماذج التعليمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="px-10 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                ابدأ رحلتك مجاناً
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 border-blue-200 hover:bg-blue-50 text-blue-600  shadow-lg">
                تعرف على المزيد
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}