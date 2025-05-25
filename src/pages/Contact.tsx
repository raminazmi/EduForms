import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo } from "@/data/contactInfoData";

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

    setTimeout(() => {
      alert("تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

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

      {/* Contact Form & Additional Info */}
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

      <Footer />
    </div>
  );
}