
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Activity,
  Calendar,
  FileText,
  Home,
  PieChart,
  Pill,
  Users,
  MessageCircle,
  Heart,
  Receipt,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, path, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
        isActive
          ? "bg-medical-teal text-white"
          : "hover:bg-medical-light text-gray-700 hover:text-medical-navy"
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, {
          className: cn("h-5 w-5", isActive ? "text-white" : "text-medical-navy"),
          strokeWidth: 2,
        })}
      </div>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    {
      icon: <Home />,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: <Users />,
      label: "Patients",
      path: "/patients",
    },
    {
      icon: <Calendar />,
      label: "Appointments",
      path: "/appointments",
    },
    {
      icon: <Pill />,
      label: "Pharmacy",
      path: "/pharmacy",
    },
    {
      icon: <Heart />,
      label: "Donations",
      path: "/donations",
    },
    {
      icon: <MessageCircle />,
      label: "Complaints",
      path: "/complaints",
    },
    {
      icon: <FileText />,
      label: "Records",
      path: "/records",
    },
    {
      icon: <Receipt />,
      label: "Billing",
      path: "/billing",
    },
    {
      icon: <PieChart />,
      label: "Reports",
      path: "/reports",
    },
  ];

  return (
    <div className="min-w-60 h-screen border-r bg-white flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2">
          <Activity className="h-6 w-6 text-medical-teal" />
          <h1 className="font-bold text-xl text-medical-navy">HealthHub</h1>
        </div>
      </div>
      <div className="px-3 py-2">
        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={
                item.path === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.path)
              }
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
