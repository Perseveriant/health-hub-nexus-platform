
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CalendarCheck, FilePlus, Pill, HeartPulse } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "appointment" | "record" | "medication" | "vital";
  title: string;
  time: string;
  description: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "appointment",
    title: "New appointment scheduled",
    time: "5 minutes ago",
    description: "Dr. Johnson scheduled with patient Emma Wilson"
  },
  {
    id: "2",
    type: "record",
    title: "Patient record updated",
    time: "20 minutes ago",
    description: "Marcus Aurelius's medical history updated"
  },
  {
    id: "3",
    type: "medication",
    title: "Medication dispensed",
    time: "1 hour ago",
    description: "Amoxicillin prescribed to Sarah Johnson"
  },
  {
    id: "4",
    type: "vital",
    title: "Patient vitals recorded",
    time: "2 hours ago",
    description: "Blood pressure and temperature recorded for Thomas Baker"
  }
];

const RecentActivity = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <CalendarCheck className="h-4 w-4" />;
      case "record":
        return <FilePlus className="h-4 w-4" />;
      case "medication":
        return <Pill className="h-4 w-4" />;
      case "vital":
        return <HeartPulse className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "appointment":
        return "bg-blue-100 text-blue-700";
      case "record":
        return "bg-green-100 text-green-700";
      case "medication":
        return "bg-purple-100 text-purple-700";
      case "vital":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div
              className={cn(
                "mt-0.5 h-9 w-9 rounded-full flex items-center justify-center",
                getActivityColor(activity.type)
              )}
            >
              {getActivityIcon(activity.type)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="font-medium">{activity.title}</p>
                <Badge variant="outline" className="text-xs">
                  {activity.time}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
