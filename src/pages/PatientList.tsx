
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, MoreVertical, FileText, Calendar, Trash } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  initials: string;
  age: number;
  gender: string;
  contactNumber: string;
  lastVisit: string;
  status: "active" | "inactive" | "critical";
}

const patients: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    initials: "JS",
    age: 45,
    gender: "Male",
    contactNumber: "(555) 123-4567",
    lastVisit: "2023-06-15",
    status: "active",
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    initials: "SJ",
    age: 32,
    gender: "Female",
    contactNumber: "(555) 234-5678",
    lastVisit: "2023-06-20",
    status: "active",
  },
  {
    id: "P003",
    name: "Robert Davis",
    initials: "RD",
    age: 67,
    gender: "Male",
    contactNumber: "(555) 345-6789",
    lastVisit: "2023-06-08",
    status: "critical",
  },
  {
    id: "P004",
    name: "Jennifer Wilson",
    initials: "JW",
    age: 29,
    gender: "Female",
    contactNumber: "(555) 456-7890",
    lastVisit: "2023-06-18",
    status: "active",
  },
  {
    id: "P005",
    name: "Michael Brown",
    initials: "MB",
    age: 51,
    gender: "Male",
    contactNumber: "(555) 567-8901",
    lastVisit: "2023-06-01",
    status: "inactive",
  },
];

const PatientList = () => {
  const navigate = useNavigate();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Active</Badge>;
      case "inactive":
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-50">Inactive</Badge>;
      case "critical":
        return <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">Critical</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleViewPatient = (patientId: string) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          Add Patient
        </Button>
      </div>

      <div className="flex items-center gap-4 w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search patients..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="border rounded-lg bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} className="hover:bg-gray-50">
                <TableCell>{patient.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-medical-light text-medical-teal">
                        {patient.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{patient.name}</span>
                  </div>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.contactNumber}</TableCell>
                <TableCell>{formatDate(patient.lastVisit)}</TableCell>
                <TableCell>{getStatusBadge(patient.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewPatient(patient.id)} className="cursor-pointer">
                        <FileText className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Appointment
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PatientList;
