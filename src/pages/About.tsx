
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, Users, Target, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "الهدف",
      description: "تسهيل العمل الإداري والتعليمي للمعلمين والإداريين من خلال أدوات EduFormsة متطورة وسهلة الاستخدام"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "المجتمع",
      description: "بناء مجتمع تعليمي متصل يدعم التعاون والتطوير المستمر بين المعلمين والمؤسسات التعليمية"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "الجودة",
      description: "الالتزام بأعلى معايير الجودة في تصميم النماذج والتقارير لضمان احترافية العمل التعليمي"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "الشغف",
      description: "نؤمن بأهمية التعليم ونعمل بشغف لتقديم حلول تقنية تخدم العملية التعليمية في المملكة"
    }
  ];

  const team = [
    {
      name: "أحمد محمد العتيبي",
      role: "المؤسس والرئيس التنفيذي",
      bio: "خبرة 15 عاماً في التعليم والتقنية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "فاطمة أحمد السالم",
      role: "مديرة المنتج",
      bio: "متخصصة في تجربة المستخدم والتصميم",
      image: "https://images.unsplash.com/photo-1494790108755-2616c27c11e0?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "خالد سعد المطيري",
      role: "مدير التطوير التقني",
      bio: "خبير في تطوير التطبيقات التعليمية",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10,000+", label: "معلم يستخدم المنصة" },
    { number: "500+", label: "مدرسة تثق بنا" },
    { number: "50,000+", label: "تقرير تم إنشاؤه" },
    { number: "99%", label: "معدل رضا العملاء" }
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
              <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الميزات</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الباقات والأسعار</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تواصل معنا</Link>
              <Link to="/about" className="text-blue-600 font-bold border-b-2 border-blue-600">من نحن</Link>
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
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">من نحن</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            نحن فريق من التربويين والمطورين المتخصصين، نؤمن بأن التكنولوجيا يجب أن تخدم التعليم
            وتسهل على المعلمين والإداريين أداء مهامهم بكفاءة وفعالية أكبر
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  بدأت فكرة EduForms عندما لاحظنا التحديات التي يواجهها المعلمون والإداريون في إعداد
                  التقارير والنماذج التعليمية. كان العمل يتطلب ساعات طويلة لإنشاء تقارير بسيطة، مما يأخذ
                  من وقتهم الثمين الذي يجب أن يُركز على التدريس والتطوير.
                </p>
                <p>
                  في عام 2023، قررنا أن نكون جزءاً من الحل. جمعنا فريقاً من المطورين والتربويين
                  لتطوير منصة تجمع بين سهولة الاستخدام والاحترافية، مع التركيز على الاحتياجات الفعلية
                  للمعلمين في المملكة العربية السعودية.
                </p>
                <p>
                  اليوم، نفخر بخدمة آلاف المعلمين والمدارس، ونساعدهم على توفير الوقت والجهد
                  للتركيز على ما يهم حقاً: تعليم وتطوير الأجيال القادمة.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="فريق العمل"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">قيمنا ورؤيتنا</h2>
            <p className="text-xl text-gray-600">المبادئ التي تقود عملنا وتشكل مستقبل التعليم الEduForms</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600">الأشخاص الذين يقفون وراء نجاح EduForms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl text-gray-800">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">رؤيتنا للمستقبل</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            نسعى لأن نكون المنصة الرائدة في المملكة العربية السعودية لحلول التقارير التعليمية،
            ونهدف إلى تمكين كل معلم وإداري من أداء عمله بأقصى كفاءة ممكنة، مساهمين بذلك في
            تطوير منظومة التعليم وتحقيق رؤية المملكة 2030.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
                انضم إلى رحلتنا
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 border-blue-200 hover:bg-blue-50 text-blue-600">
                تواصل معنا
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
