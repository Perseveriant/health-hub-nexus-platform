
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  trend,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "medical-card flex items-center justify-between",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="medical-stats">{value}</p>
        {trend && (
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "text-xs font-medium",
                trend.positive ? "text-medical-success" : "text-medical-critical"
              )}
            >
              {trend.value}
            </span>
            <span className="text-xs text-gray-500">vs. last month</span>
          </div>
        )}
      </div>
      <div
        className={cn(
          "h-12 w-12 flex items-center justify-center rounded-full",
          "bg-medical-light"
        )}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-6 w-6 text-medical-teal",
          strokeWidth: 2,
        })}
      </div>
    </div>
  );
};

export default StatCard;
