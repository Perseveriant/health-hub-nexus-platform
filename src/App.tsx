
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import Appointments from "./pages/Appointments";
import Pharmacy from "./pages/Pharmacy";
import Donations from "./pages/Donations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <Dashboard />
              </Layout>
            } 
          />
          <Route 
            path="/patients" 
            element={
              <Layout>
                <PatientList />
              </Layout>
            } 
          />
          <Route 
            path="/appointments" 
            element={
              <Layout>
                <Appointments />
              </Layout>
            } 
          />
          <Route 
            path="/pharmacy" 
            element={
              <Layout>
                <Pharmacy />
              </Layout>
            } 
          />
          <Route 
            path="/donations" 
            element={
              <Layout>
                <Donations />
              </Layout>
            } 
          />
          {/* Additional routes will be added here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
