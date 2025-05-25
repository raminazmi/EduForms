
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAppSelector } from "@/hooks/redux-hooks";

export function Header() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="bg-white border-b border-border h-16 flex items-center px-6 gap-4">
      <SidebarTrigger className="p-2 hover:bg-accent rounded-md transition-colors" />
      
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-foreground">
          مرحباً بك، {user?.name || 'المعلم'}
        </h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('ar-SA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </header>
  );
}
