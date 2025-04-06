
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CalendarPlus, Clock, Filter } from "lucide-react";
import AppointmentItem from "@/components/dashboard/AppointmentItem";

const appointments = {
  today: [
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
  ],
  upcoming: [
    {
      patient: {
        name: "Jennifer Adams",
        initials: "JA",
      },
      time: "Tomorrow, 10:00 AM",
      type: "Annual Physical",
      status: "scheduled" as const,
    },
    {
      patient: {
        name: "William Turner",
        initials: "WT",
      },
      time: "Tomorrow, 1:30 PM",
      type: "Blood Test",
      status: "scheduled" as const,
    },
    {
      patient: {
        name: "Rachel Green",
        initials: "RG",
      },
      time: "May 22, 11:00 AM",
      type: "Vaccination",
      status: "scheduled" as const,
    },
  ],
  past: [
    {
      patient: {
        name: "Daniel Clark",
        initials: "DC",
      },
      time: "Yesterday, 2:00 PM",
      type: "Follow-up",
      status: "completed" as const,
    },
    {
      patient: {
        name: "Olivia Martinez",
        initials: "OM",
      },
      time: "May 10, 9:15 AM",
      type: "General Checkup",
      status: "completed" as const,
    },
    {
      patient: {
        name: "Michael Brown",
        initials: "MB",
      },
      time: "May 8, 3:30 PM",
      type: "Consultation",
      status: "canceled" as const,
    },
  ],
};

const Appointments = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <Button>
          <CalendarPlus className="h-4 w-4 mr-1" />
          Schedule Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  Appointment Schedule
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="today">
                <TabsList className="mb-4">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
                <TabsContent value="today">
                  <div className="divide-y">
                    {appointments.today.map((appointment, index) => (
                      <AppointmentItem key={index} {...appointment} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="upcoming">
                  <div className="divide-y">
                    {appointments.upcoming.map((appointment, index) => (
                      <AppointmentItem key={index} {...appointment} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="past">
                  <div className="divide-y">
                    {appointments.past.map((appointment, index) => (
                      <AppointmentItem key={index} {...appointment} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="bg-medical-light rounded-full p-2">
                  <Clock className="h-4 w-4 text-medical-teal" />
                </div>
                <div>
                  <p className="font-medium text-sm">9:00 AM - 10:00 AM</p>
                  <p className="text-xs text-gray-500">
                    General Checkup - Emma Wilson
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-md border-l-4 border-blue-500">
                <div className="bg-blue-100 rounded-full p-2">
                  <Clock className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">10:30 AM - 11:30 AM</p>
                  <p className="text-xs text-gray-500">
                    Follow-up - Marcus Lee
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="bg-medical-light rounded-full p-2">
                  <Clock className="h-4 w-4 text-medical-teal" />
                </div>
                <div>
                  <p className="font-medium text-sm">11:45 AM - 12:15 PM</p>
                  <p className="text-xs text-gray-500">
                    Consultation - Sarah Johnson
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="bg-medical-light rounded-full p-2">
                  <Clock className="h-4 w-4 text-medical-teal" />
                </div>
                <div>
                  <p className="font-medium text-sm">2:15 PM - 3:00 PM</p>
                  <p className="text-xs text-gray-500">
                    X-Ray Results - Robert Davis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
