
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // محاكاة إرسال الرسالة
    setTimeout(() => {
      alert("تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "البريد الإلكتروني",
      content: "support@eduforms.sa",
      description: "راسلنا في أي وقت وسنرد خلال 24 ساعة"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "الهاتف",
      content: "+966 11 123 4567",
      description: "اتصل بنا من الساعة 9 صباحاً حتى 6 مساءً"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية",
      description: "مقرنا الرئيسي في قلب العاصمة"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 - 18:00",
      description: "نحن هنا لخدمتك خلال أيام العمل"
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
              <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الميزات</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الباقات والأسعار</Link>
              <Link to="/contact" className="text-blue-600 font-bold border-b-2 border-blue-600">تواصل معنا</Link>
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
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-600 mb-8">
            نحن هنا لمساعدتك! تواصل معنا لأي استفسار أو اقتراح أو دعم فني
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-800">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-800 mb-2">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">أرسل لنا رسالة</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">الاسم الكامل</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">موضوع الرسالة</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="ما موضوع رسالتك؟"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">الرسالة</Label>
                      <Textarea
                        id="message"
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 min-h-32"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 text-lg font-bold" 
                      disabled={loading}
                    >
                      {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">لماذا تتواصل معنا؟</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">الدعم الفني</h4>
                      <p className="text-gray-600">مساعدة في استخدام المنصة وحل أي مشاكل تقنية</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">الاستفسارات العامة</h4>
                      <p className="text-gray-600">أسئلة حول الخدمات والباقات والميزات</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">الاقتراحات والتحسينات</h4>
                      <p className="text-gray-600">نرحب بآرائك لتطوير المنصة وتحسين الخدمة</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">الشراكات والتعاون</h4>
                      <p className="text-gray-600">فرص للشراكة مع المدارس والمؤسسات التعليمية</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">أوقات الاستجابة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">الاستفسارات العامة:</span>
                    <span className="font-semibold text-gray-800">خلال 24 ساعة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الدعم الفني:</span>
                    <span className="font-semibold text-gray-800">خلال 4-8 ساعات</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المشاكل العاجلة:</span>
                    <span className="font-semibold text-gray-800">خلال ساعة واحدة</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">جرب EduForms مجاناً</h2>
          <p className="text-lg mb-6 opacity-95">
            بدلاً من الانتظار، لم لا تجرب منصتنا بنفسك؟
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100 font-bold">
              ابدأ التجربة المجانية
            </Button>
          </Link>
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
