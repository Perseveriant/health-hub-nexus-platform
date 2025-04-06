
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Droplet, HeartPulse, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface BloodDonor {
  id: string;
  name: string;
  bloodType: string;
  lastDonation: string;
  frequency: string;
  status: "active" | "inactive";
}

interface OrganDonor {
  id: string;
  name: string;
  age: number;
  organs: string[];
  registrationDate: string;
  status: "registered" | "pending" | "matched";
}

const bloodDonors: BloodDonor[] = [
  {
    id: "BD001",
    name: "John Smith",
    bloodType: "O+",
    lastDonation: "2023-04-15",
    frequency: "Every 3 months",
    status: "active",
  },
  {
    id: "BD002",
    name: "Emma Wilson",
    bloodType: "A-",
    lastDonation: "2023-05-20",
    frequency: "Every 6 months",
    status: "active",
  },
  {
    id: "BD003",
    name: "Michael Brown",
    bloodType: "B+",
    lastDonation: "2023-01-10",
    frequency: "Every 3 months",
    status: "inactive",
  },
  {
    id: "BD004",
    name: "Sophia Garcia",
    bloodType: "AB+",
    lastDonation: "2023-05-05",
    frequency: "Every 4 months",
    status: "active",
  },
];

const organDonors: OrganDonor[] = [
  {
    id: "OD001",
    name: "Robert Davis",
    age: 42,
    organs: ["Kidney", "Liver"],
    registrationDate: "2022-10-15",
    status: "registered",
  },
  {
    id: "OD002",
    name: "Jennifer Adams",
    age: 35,
    organs: ["Cornea"],
    registrationDate: "2023-02-20",
    status: "registered",
  },
  {
    id: "OD003",
    name: "William Turner",
    age: 50,
    organs: ["Heart", "Lungs"],
    registrationDate: "2023-04-08",
    status: "pending",
  },
  {
    id: "OD004",
    name: "Rachel Green",
    age: 29,
    organs: ["Kidney"],
    registrationDate: "2023-01-15",
    status: "matched",
  },
];

const bloodInventory = [
  { type: "A+", current: 65, target: 100 },
  { type: "A-", current: 25, target: 50 },
  { type: "B+", current: 45, target: 80 },
  { type: "B-", current: 20, target: 40 },
  { type: "AB+", current: 18, target: 30 },
  { type: "AB-", current: 8, target: 20 },
  { type: "O+", current: 90, target: 120 },
  { type: "O-", current: 35, target: 70 },
];

const organWaitlist = [
  { organ: "Kidney", count: 28 },
  { organ: "Liver", count: 15 },
  { organ: "Heart", count: 12 },
  { organ: "Lungs", count: 8 },
  { organ: "Pancreas", count: 5 },
  { organ: "Cornea", count: 19 },
];

const Donations = () => {
  const [activeTab, setActiveTab] = useState("blood");

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDonorStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Inactive</Badge>;
      case "registered":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Registered</Badge>;
      case "pending":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Pending</Badge>;
      case "matched":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Matched</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Donation Management
        </h1>
        <div className="flex items-center gap-3">
          <Button>
            <Plus className="h-4 w-4 mr-1" />
            Register New Donor
          </Button>
        </div>
      </div>

      <Tabs defaultValue="blood" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="blood">Blood Donation</TabsTrigger>
          <TabsTrigger value="organ">Organ Donation</TabsTrigger>
        </TabsList>

        <TabsContent value="blood" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">
                  Blood Donors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bloodDonors.map((donor) => (
                      <TableRow key={donor.id} className="hover:bg-gray-50">
                        <TableCell>{donor.id}</TableCell>
                        <TableCell className="font-medium">{donor.name}</TableCell>
                        <TableCell>{donor.bloodType}</TableCell>
                        <TableCell>{formatDate(donor.lastDonation)}</TableCell>
                        <TableCell>{donor.frequency}</TableCell>
                        <TableCell>{getDonorStatusBadge(donor.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg font-medium">
                    Blood Inventory
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {bloodInventory.map((item) => (
                  <div key={item.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-gray-800">
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.current} / {item.target} units
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {Math.round((item.current / item.target) * 100)}%
                      </span>
                    </div>
                    <Progress
                      value={(item.current / item.target) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="organ" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">
                  Organ Donors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Organs</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {organDonors.map((donor) => (
                      <TableRow key={donor.id} className="hover:bg-gray-50">
                        <TableCell>{donor.id}</TableCell>
                        <TableCell className="font-medium">{donor.name}</TableCell>
                        <TableCell>{donor.age}</TableCell>
                        <TableCell>{donor.organs.join(", ")}</TableCell>
                        <TableCell>{formatDate(donor.registrationDate)}</TableCell>
                        <TableCell>{getDonorStatusBadge(donor.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-medical-teal" />
                  <CardTitle className="text-lg font-medium">
                    Waitlist Summary
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {organWaitlist.map((item) => (
                    <div
                      key={item.organ}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                    >
                      <span className="font-medium">{item.organ}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-medical-navy">
                          {item.count}
                        </span>
                        <span className="text-sm text-gray-500">patients</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View Detailed Waitlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Donations;
