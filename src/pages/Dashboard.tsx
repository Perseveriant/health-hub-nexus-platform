
import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import AppointmentItem from "@/components/dashboard/AppointmentItem";
import ChartSection from "@/components/dashboard/ChartSection";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  CalendarCheck,
  HeartPulse,
  Pill,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  const appointments = [
    {
      patient: {
        name: "Emma Wilson",
        initials: "EW",
      },
      time: "9:00 AM",
      type: "General Checkup",
      status: "scheduled" as const,
    },
    {
      patient: {
        name: "Marcus Lee",
        initials: "ML",
      },
      time: "10:30 AM",
      type: "Follow-up",
      status: "in-progress" as const,
    },
    {
      patient: {
        name: "Sarah Johnson",
        initials: "SJ",
      },
      time: "11:45 AM",
      type: "Consultation",
      status: "scheduled" as const,
    },
    {
      patient: {
        name: "Robert Davis",
        initials: "RD",
      },
      time: "2:15 PM",
      type: "X-Ray Results",
      status: "scheduled" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-3">
          <Button>
            <Plus className="h-4 w-4 mr-1" />
            New Patient
          </Button>
          <Button variant="outline">
            <CalendarCheck className="h-4 w-4 mr-1" />
            Schedule Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="3,245"
          icon={<Users />}
          trend={{
            value: "+5.2%",
            positive: true,
          }}
        />
        <StatCard
          title="Today's Appointments"
          value="42"
          icon={<CalendarCheck />}
          trend={{
            value: "+12%",
            positive: true,
          }}
        />
        <StatCard
          title="Blood Donations"
          value="18"
          icon={<HeartPulse />}
          trend={{
            value: "-3.1%",
            positive: false,
          }}
        />
        <StatCard
          title="Medicine Stock"
          value="1,287"
          icon={<Pill />}
          trend={{
            value: "+2.4%",
            positive: true,
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">
              Today's Appointments
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-medical-teal">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {appointments.map((appointment, index) => (
                <AppointmentItem key={index} {...appointment} />
              ))}
            </div>
          </CardContent>
        </Card>
        <RecentActivity />
      </div>

      <ChartSection />
    </div>
  );
};

export default Dashboard;
