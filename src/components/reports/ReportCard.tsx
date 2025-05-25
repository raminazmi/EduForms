
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReportCardProps {
  title: string;
  description: string;
  type: string;
  count: number;
  icon: string;
  status: 'active' | 'pending' | 'completed';
  onClick?: () => void;
}

export function ReportCard({ title, description, type, count, icon, status, onClick }: ReportCardProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800'
  };

  const statusLabels = {
    active: 'نشط',
    pending: 'قيد الانتظار',
    completed: 'مكتمل'
  };

  return (
    <Card
      className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary-500"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-2xl">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600">{count}</div>
          <div className="text-sm text-muted-foreground">{type}</div>
        </div>
      </CardContent>
    </Card>
  );
}
