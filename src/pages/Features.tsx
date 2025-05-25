import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { features } from "@/data/featuresData";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            اكتشف قوة EduForms في تسهيل عملك التعليمي
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block">ميزات EduForms</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              المتطورة
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            تعرف على الميزات التي تجعل EduForms الخيار الأول للمعلمين والإداريين في المملكة العربية السعودية
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <Card className="text-center lg:text-right hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-center lg:justify-start mb-4">
                        <div className="p-4 bg-gray-50 rounded-2xl">
                          {feature.icon}
                        </div>
                      </div>
                      <CardTitle className="text-3xl text-gray-800 mb-4">{feature.title}</CardTitle>
                      <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-right">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
                      <img
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1586281380349-632531db7ed4' : index === 1 ? '1581291518857-4e27b48ff24e' : '1460472178825-e5240623afd5'}?w=600&h=400&fit=crop`}
                        alt={feature.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">جرب جميع هذه الميزات اليوم</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            ابدأ مجاناً واكتشف كيف يمكن لـ EduForms أن يوفر عليك الوقت والجهد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
                ابدأ مجاناً الآن
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
                مشاهدة الباقات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}