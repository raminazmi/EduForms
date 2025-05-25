import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contactInfo = [
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