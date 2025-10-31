import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { MobileSidebar } from "./components/MobileSidebar";
import { NewsPreview } from "./components/NewsPreview";
import Home from "./pages/Home";
import News from "./pages/News";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MobileSidebar />
        <div className="flex w-full min-h-screen pt-16 lg:pt-0">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          
          <main className="flex-1 p-8 lg:p-12 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/cv" element={<CV />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <NewsPreview />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
