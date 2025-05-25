
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { loginSuccess } from "@/store/slices/authSlice";
import { BookOpen, Star } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    subject: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      return;
    }

    setLoading(true);

    try {
      // محاكاة إنشاء الحساب
      setTimeout(() => {
        const mockUser = {
          id: '1',
          name: formData.name,
          email: formData.email,
          role: 'teacher' as const,
          school: formData.school
        };
        
        dispatch(loginSuccess(mockUser));
        navigate('/');
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-2 h-2 text-yellow-800" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EduForms</h1>
              <p className="text-sm text-gray-600 font-medium">صديق المعلم والإداري</p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">إنشاء حساب جديد</h2>
          <p className="text-gray-600 mt-2">انضم إلى منصة EduForms للتقارير التعليمية</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-center text-xl">معلوماتك الشخصية</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">الاسم الكامل</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="أحمد محمد العلي"
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
                  placeholder="teacher@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school" className="text-gray-700 font-medium">اسم المدرسة</Label>
                <Input
                  id="school"
                  type="text"
                  placeholder="مدرسة الأمير فيصل الابتدائية"
                  value={formData.school}
                  onChange={(e) => handleInputChange("school", e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 font-medium">التخصص</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500">
                    <SelectValue placeholder="اختر تخصصك" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arabic">اللغة العربية</SelectItem>
                    <SelectItem value="math">الرياضيات</SelectItem>
                    <SelectItem value="science">العلوم</SelectItem>
                    <SelectItem value="english">اللغة الإنجليزية</SelectItem>
                    <SelectItem value="social">الاجتماعيات</SelectItem>
                    <SelectItem value="islamic">التربية الإسلامية</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">كلمة المرور</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">تأكيد كلمة المرور</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <input type="checkbox" className="rounded border-gray-300" required />
                <span className="text-sm text-gray-600">
                  أوافق على{" "}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                    الشروط والأحكام
                  </Link>
                  {" "}و{" "}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                    سياسة الخصوصية
                  </Link>
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 text-lg font-bold" 
                disabled={loading}
              >
                {loading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold">
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
