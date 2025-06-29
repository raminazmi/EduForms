# تشغيل مشروع EduForms على Windows

## 1. متطلبات النظام

تأكد من تثبيت:
- **Node.js** (الإصدار 18 أو أحدث): [تحميل من هنا](https://nodejs.org/)
- **Git** (اختياري): [تحميل من هنا](https://git-scm.com/)

## 2. تحميل المشروع

### الطريقة الأولى: نسخ الملفات يدوياً
1. انسخ جميع ملفات المشروع إلى مجلد جديد
2. افتح Command Prompt أو PowerShell
3. انتقل إلى مجلد المشروع:
```cmd
cd C:\Users\ramin\Downloads\project
```

### الطريقة الثانية: استخدام Git (إذا كان متوفراً)
```cmd
git clone <repository-url>
cd eduforms-app
```

## 3. تثبيت الاعتمادات

```cmd
npm install
```

## 4. إنشاء ملف البيئة (اختياري)

```cmd
copy .env.example .env
```

أو أنشئ ملف `.env` يدوياً وأضف:
```
VITE_APP_NAME=EduForms
VITE_API_URL=http://localhost:5173
```

## 5. تشغيل المشروع

```cmd
npm run dev
```

## 6. الوصول للتطبيق

بعد تشغيل الأمر أعلاه، ستظهر رسالة مثل:
```
Local:   http://localhost:5173/
Network: http://192.168.1.100:5173/
```

افتح المتصفح واذهب إلى: `http://localhost:5173`

## 7. أوامر إضافية مفيدة

### بناء المشروع للإنتاج
```cmd
npm run build
```

### معاينة النسخة المبنية
```cmd
npm run preview
```

### فحص الأخطاء
```cmd
npm run lint
```

## 8. حل المشاكل الشائعة

### مشكلة: 'npm' is not recognized
- تأكد من تثبيت Node.js بشكل صحيح
- أعد تشغيل Command Prompt بعد التثبيت

### مشكلة: Port 5173 is already in use
```cmd
npm run dev -- --port 3000
```

### مشكلة: Permission denied
- شغل Command Prompt كمدير (Run as Administrator)

### مشكلة في تثبيت الحزم
```cmd
npm cache clean --force
npm install
```

## 9. هيكل المشروع

```
project/
├── src/                 # ملفات المصدر
│   ├── components/      # مكونات React
│   ├── pages/          # صفحات التطبيق
│   ├── hooks/          # React Hooks مخصصة
│   ├── store/          # إدارة الحالة (Redux)
│   └── data/           # البيانات الثابتة
├── public/             # الملفات العامة
├── package.json        # اعتمادات المشروع
└── vite.config.js     # إعدادات Vite
```

## 10. الميزات المتاحة

- ✅ واجهة مستخدم باللغة العربية
- ✅ نظام المصادقة (تسجيل دخول/إنشاء حساب)
- ✅ عرض الباقات والأسعار
- ✅ صفحات المعلومات (من نحن، تواصل معنا، إلخ)
- ✅ تصميم متجاوب يعمل على الجوال والحاسوب
- ✅ نظام الألوان والخطوط العربية

## 11. تطوير المشروع

لإضافة ميزات جديدة:
1. أنشئ مكونات جديدة في `src/components/`
2. أضف صفحات جديدة في `src/pages/`
3. حدث الروابط في `src/App.tsx`

## 12. نشر المشروع

### على Netlify:
1. شغل `npm run build`
2. ارفع مجلد `dist` إلى Netlify

### على Vercel:
1. ربط المشروع بـ Git
2. Vercel سيبني المشروع تلقائياً

---

**ملاحظة مهمة:** هذا مشروع React/Vite وليس Laravel، لذلك لا تحتاج لـ PHP أو Composer أو قاعدة بيانات لتشغيله محلياً.