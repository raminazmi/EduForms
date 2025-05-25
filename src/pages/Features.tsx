
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, PenTool, Download, BookOpen, Star, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const features = [
    {
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      title: "نماذج تقارير جاهزة",
      description: "مكتبة شاملة من النماذج التعليمية المُعدة مسبقاً لجميع المراحل الدراسية والتخصصات المختلفة",
      benefits: [
        "أكثر من 50 نموذج تقرير متنوع",
        "تناسب جميع المراحل التعليمية",
        "مصممة بمعايير تعليمية عالية",
        "محدثة باستمرار لتواكب المناهج"
      ]
    },
    {
      icon: <PenTool className="w-12 h-12 text-green-500" />,
      title: "تخصيص سهل ومرن",
      description: "إمكانية تعديل وتخصيص النماذج بسهولة لتناسب احتياجاتك التعليمية الخاصة وطبيعة مدرستك",
      benefits: [
        "واجهة تحرير بسيطة ومباشرة",
        "إضافة الشعارات والبيانات المخصصة",
        "تعديل الألوان والخطوط",
        "حفظ القوالب المخصصة لاستخدامها لاحقاً"
      ]
    },
    {
      icon: <Download className="w-12 h-12 text-orange-500" />,
      title: "تصدير احترافي عالي الجودة",
      description: "تصدير التقارير بجودة طباعة عالية بصيغة PDF أو PNG مع إمكانية المشاركة المباشرة",
      benefits: [
        "جودة طباعة عالية الدقة",
        "تصدير فوري بضغطة واحدة",
        "مشاركة مباشرة عبر البريد أو الواتساب",
        "حفظ تلقائي في السحابة"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-yellow-800" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduForms
                </h1>
                <p className="text-sm text-gray-600 font-medium">صديق المعلم والإداري</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-blue-600 font-bold border-b-2 border-blue-600">الميزات</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الباقات والأسعار</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تواصل معنا</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">من نحن</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">تسجيل الدخول</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  إنشاء حساب
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            اكتشف قوة EduForms في تسهيل عملك التعليمي
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
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
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
                ابدأ مجاناً الآن
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 border-blue-200 hover:bg-blue-50 text-blue-600">
                مشاهدة الباقات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">EduForms</span>
          </Link>
          <p className="text-gray-400 mb-4">© 2025 EduForms. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-white">من نحن</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white">سياسة الخصوصية</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">تواصل معنا</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
