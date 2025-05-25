import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { values } from "@/data/valuesData";
import { team } from "@/data/teamData";
import { stats } from "@/data/statsData";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

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

      <Footer />
    </div>
  );
}