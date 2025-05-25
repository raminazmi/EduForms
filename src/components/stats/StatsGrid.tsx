
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

function StatCard({ title, value, icon, change, changeType }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-2xl">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${changeColors[changeType || 'neutral']} mt-1`}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function StatsGrid() {
  const stats = [
    {
      title: "إجمالي الطلاب",
      value: "1,248",
      icon: "👥",
      change: "+12% من الشهر الماضي",
      changeType: "positive" as const
    },
    {
      title: "التقارير المكتملة",
      value: "89",
      icon: "📊",
      change: "+5% من الأسبوع الماضي",
      changeType: "positive" as const
    },
    {
      title: "معدل الحضور",
      value: "94.2%",
      icon: "✅",
      change: "-2% من الشهر الماضي",
      changeType: "negative" as const
    },
    {
      title: "المعدل العام",
      value: "87.5",
      icon: "⭐",
      change: "بدون تغيير",
      changeType: "neutral" as const
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
