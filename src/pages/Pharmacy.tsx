
import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, Search, Plus, AlertTriangle } from "lucide-react";

interface Medication {
  id: string;
  name: string;
  category: string;
  stock: number;
  supplier: string;
  price: number;
  expiryDate: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const medications: Medication[] = [
  {
    id: "MED001",
    name: "Amoxicillin",
    category: "Antibiotic",
    stock: 250,
    supplier: "MediPharm Inc.",
    price: 8.99,
    expiryDate: "2024-12-15",
    status: "in-stock",
  },
  {
    id: "MED002",
    name: "Lipitor",
    category: "Cholesterol",
    stock: 120,
    supplier: "PharmaCare Ltd.",
    price: 15.50,
    expiryDate: "2024-10-20",
    status: "in-stock",
  },
  {
    id: "MED003",
    name: "Ventolin",
    category: "Respiratory",
    stock: 45,
    supplier: "HealthMed Supply",
    price: 12.75,
    expiryDate: "2024-08-30",
    status: "low-stock",
  },
  {
    id: "MED004",
    name: "Prozac",
    category: "Antidepressant",
    stock: 85,
    supplier: "MediPharm Inc.",
    price: 22.99,
    expiryDate: "2025-03-15",
    status: "in-stock",
  },
  {
    id: "MED005",
    name: "Insulin",
    category: "Diabetes",
    stock: 0,
    supplier: "LifeScience Medical",
    price: 45.25,
    expiryDate: "2024-09-10",
    status: "out-of-stock",
  },
];

const lowStockItems = medications.filter(med => med.status === "low-stock" || med.status === "out-of-stock");

const Pharmacy = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">In Stock</Badge>;
      case "low-stock":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Low Stock</Badge>;
      case "out-of-stock":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Out of Stock</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Pharmacy Management</h1>
        <div className="flex items-center gap-3">
          <Button>
            <Plus className="h-4 w-4 mr-1" />
            Add Medication
          </Button>
          <Button variant="outline">
            <Pill className="h-4 w-4 mr-1" />
            Place Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search medications..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        {lowStockItems.length > 0 && (
          <div className="col-span-2">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="h-5 w-5" />
                  <CardTitle className="text-lg font-medium">
                    Low Stock Alert
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-amber-800 space-y-2">
                <p>The following medications are low or out of stock:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {lowStockItems.map(item => (
                    <li key={item.id}>
                      <span className="font-medium">{item.name}</span> - {item.stock} units remaining
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="border rounded-lg bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Medication ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medications.map((medication) => (
              <TableRow key={medication.id} className="hover:bg-gray-50">
                <TableCell>{medication.id}</TableCell>
                <TableCell className="font-medium">{medication.name}</TableCell>
                <TableCell>{medication.category}</TableCell>
                <TableCell>{medication.stock}</TableCell>
                <TableCell>{medication.supplier}</TableCell>
                <TableCell>${medication.price.toFixed(2)}</TableCell>
                <TableCell>{formatDate(medication.expiryDate)}</TableCell>
                <TableCell>{getStatusBadge(medication.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Pharmacy;
