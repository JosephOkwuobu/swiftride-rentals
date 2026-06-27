import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";
import HowItWorks from "./components/HowItWorks";
import Requirements from "./components/Requirements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import RentalForm from "./components/RentalForm";
import BookNow from "./components/BookNow";
import CTA from "./components/CTA";
import Inquiry from "./components/Inquiry";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import FloatingQuickBook from "./components/FloatingQuickBook";

import AdminLogin from "./pages/AdminLogin";
import AdminBookings from "./pages/AdminBookings";
import ProtectedRoute from "./components/ProtectedRoute";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <HowItWorks />
      <Requirements />
      <Testimonials />
      <FAQ />
      <RentalForm />
      <BookNow />
      <CTA />
      <Inquiry />
      <Footer />
      <WhatsAppFloat />
      <FloatingQuickBook />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route path="/" element={<HomePage />} />

      {/* Admin Login */}
      <Route
        path="/admin"
        element={<AdminLogin />}
      />

      {/* Protected Admin Dashboard */}
      <Route
        path="/admin/bookings"
        element={
          <ProtectedRoute>
            <AdminBookings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;