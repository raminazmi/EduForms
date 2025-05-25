
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { logout } from "@/store/slices/authSlice";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "لوحة التحكم",
    url: "/dashboard",
    icon: "🏠",
  },
  {
    title: "تقارير الطلاب",
    url: "/reports/students",
    icon: "👥",
  },
  {
    title: "تقارير الحضور",
    url: "/reports/attendance",
    icon: "📊",
  },
  {
    title: "تقارير الدرجات",
    url: "/reports/grades",
    icon: "📈",
  },
  {
    title: "تقارير السلوك",
    url: "/reports/behavior",
    icon: "⭐",
  },
  {
    title: "التقارير المالية",
    url: "/reports/financial",
    icon: "💰",
  },
  {
    title: "الإعدادات",
    url: "/settings",
    icon: "⚙️",
  },
];

export function AppSidebar() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Sidebar side="right" className="border-r border-border">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            ر
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">رقمي</h1>
            <p className="text-sm text-muted-foreground">مركز التقارير التعليمية</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-semibold">
            القائمة الرئيسية
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`transition-colors hover:bg-accent hover:text-accent-foreground ${
                      location.pathname === item.url ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        {user && (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full p-2 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
