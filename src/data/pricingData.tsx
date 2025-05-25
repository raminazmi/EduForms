import SARCurrencyWhite from "@/assets/payment-icons/sar-currency(white).svg";

export const pricingPlans = [
    {
        name: "الباقة المجانية",
        price: "0",
        period: "مجاناً للأبد",
        features: [
            "نموذج تقرير واحد فقط",
            "تصدير بصيغة PDF و PNG",
            "4 صور للتقرير",
            "دعم فني أساسي"
        ],
        popular: false,
        color: "from-gray-600 to-gray-800"
    },
    {
        name: "الباقة الشهرية",
        price: "15",
        period: (
            <span className="flex items-center justify-center gap-1" >
                <img src={SARCurrencyWhite} alt="SAR" className="h-6 w-auto" />
                <p>/شهر</p >
            </span>
        ),
        originalPrice: "30",
        discount: "خصم 50%",
        features: [
            "4 نماذج مختلفة من التقارير",
            "نموذج تقرير بـ 3 صور وباركود",
            "نموذج تقرير بـ 4 صور وباركود",
            "نموذج تقرير بـ 4 صور",
            "تصدير التقرير بصيغة PNG و PDF",
            "ضمان عمل الرابط طوال فترة الاشتراك"
        ],
        popular: false,
        color: "from-blue-500 to-blue-700"
    },
    {
        name: "الباقة السنوية",
        price: "70",
        period: (
            <span className="flex items-center justify-center gap-1" >
                <img src={SARCurrencyWhite} alt="SAR" className="h-6 w-auto" />
                <p>/سنة</p >
            </span>
        ),
        originalPrice: "240",
        discount: "خصم 70%",
        features: [
            "8 نماذج مختلفة من التقارير",
            "نموذج تقرير بصورة واحدة",
            "نموذج تقرير بصورة واحدة وباركود",
            "نموذج تقرير بصورتين",
            "نموذج تقرير بصورتين وباركود",
            "نموذج تقرير بـ 3 صور",
            "نموذج تقرير بـ 3 صور وباركود",
            "نموذج تقرير بـ 4 صور"
        ],
        popular: false,
        color: "from-green-500 to-green-700"
    }
];