
import React from "react";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4 w-full max-w-md">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
          placeholder="Search patients, appointments, etc..."
          className="border-none shadow-none focus-visible:ring-0 bg-gray-50 h-9 text-sm"
        />
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-0.5 -right-0.5 bg-medical-critical h-2 w-2 rounded-full"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <p className="font-medium">New appointment request</p>
              <p className="text-sm text-gray-500">
                Patient John Doe requested an appointment
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <p className="font-medium">Medication stock alert</p>
              <p className="text-sm text-gray-500">
                Amoxicillin stock is running low
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <p className="font-medium">Lab results available</p>
              <p className="text-sm text-gray-500">
                Results for patient Jane Smith are ready
              </p>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-medical-teal cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-medical-navy text-white">
                  DR
                </AvatarFallback>
              </Avatar>
              <span>Dr. Roberts</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
