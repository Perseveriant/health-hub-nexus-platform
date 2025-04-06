
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const patientData = [
  { name: "Jan", Inpatients: 30, Outpatients: 80 },
  { name: "Feb", Inpatients: 35, Outpatients: 90 },
  { name: "Mar", Inpatients: 25, Outpatients: 85 },
  { name: "Apr", Inpatients: 40, Outpatients: 95 },
  { name: "May", Inpatients: 45, Outpatients: 100 },
  { name: "Jun", Inpatients: 50, Outpatients: 110 },
];

const revenueData = [
  { name: "Jan", value: 25000 },
  { name: "Feb", value: 28000 },
  { name: "Mar", value: 31000 },
  { name: "Apr", value: 29000 },
  { name: "May", value: 35000 },
  { name: "Jun", value: 40000 },
];

const departmentData = [
  { name: "Cardiology", value: 25 },
  { name: "Orthopedics", value: 18 },
  { name: "Pediatrics", value: 22 },
  { name: "Neurology", value: 14 },
  { name: "Oncology", value: 16 },
  { name: "Other", value: 5 },
];

const ChartSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Patient Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="patient-flow">
            <TabsList className="mb-4">
              <TabsTrigger value="patient-flow">Patient Flow</TabsTrigger>
              <TabsTrigger value="department">By Department</TabsTrigger>
            </TabsList>
            <TabsContent value="patient-flow" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={patientData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Inpatients"
                    stackId="1"
                    stroke="#0bb5b5"
                    fill="#0bb5b5"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="Outpatients"
                    stackId="1"
                    stroke="#1e3a8a"
                    fill="#1e3a8a"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="department" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0bb5b5" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Revenue Analysis</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                formatter={(value) => [`$${value}`, "Revenue"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1e3a8a"
                fill="#1e3a8a"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartSection;
