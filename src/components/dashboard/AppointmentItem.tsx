
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AppointmentItemProps {
  patient: {
    name: string;
    avatar?: string;
    initials: string;
  };
  time: string;
  type: string;
  status: "scheduled" | "in-progress" | "completed" | "canceled";
}

const AppointmentItem = ({
  patient,
  time,
  type,
  status,
}: AppointmentItemProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "scheduled":
        return "bg-blue-50 text-blue-700";
      case "in-progress":
        return "bg-amber-50 text-amber-700";
      case "completed":
        return "bg-green-50 text-green-700";
      case "canceled":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "scheduled":
        return "Scheduled";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      case "canceled":
        return "Canceled";
      default:
        return status;
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-medical-light text-medical-teal">
            {patient.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{patient.name}</p>
          <p className="text-sm text-gray-500">
            {time} • {type}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            getStatusStyles()
          )}
        >
          {getStatusText()}
        </span>
        <Button variant="ghost" size="sm">
          View
        </Button>
      </div>
    </div>
  );
};

export default AppointmentItem;
