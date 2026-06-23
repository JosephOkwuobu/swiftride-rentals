import { useState } from "react";
import { Car, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-md">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <Car size={20} />
            SwiftRide Rentals
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm">

            <button onClick={() => scrollTo("home")} className="hover:text-blue-400">
              Home
            </button>

            <button onClick={() => scrollTo("about")} className="hover:text-blue-400">
              About
            </button>

            <button onClick={() => scrollTo("fleet")} className="hover:text-blue-400">
              Fleet
            </button>

            <button onClick={() => scrollTo("book")} className="hover:text-blue-400">
              Book
            </button>

          </div>

          {/* Desktop CTA (GLOWING BUTTON) */}
          <button
            onClick={() => scrollTo("book")}
            className="
              hidden md:block relative px-5 py-2 rounded-md font-medium
              bg-blue-600 hover:bg-blue-500 transition
              shadow-lg shadow-blue-500/30
              overflow-hidden
            "
          >
            <span className="relative z-10">Reserve Now</span>

            {/* Glow animation */}
            <span className="absolute inset-0 bg-blue-500 blur-md opacity-60 animate-ping"></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">

          <span className="font-bold flex items-center gap-2">
            <Car size={18} />
            Menu
          </span>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>

        </div>

        {/* Links */}
        <div className="flex flex-col p-6 gap-5 text-sm">

          <button onClick={() => scrollTo("home")} className="text-left hover:text-blue-400">
            Home
          </button>

          <button onClick={() => scrollTo("about")} className="text-left hover:text-blue-400">
            About
          </button>

          <button onClick={() => scrollTo("fleet")} className="text-left hover:text-blue-400">
            Fleet
          </button>

          <button onClick={() => scrollTo("book")} className="text-left hover:text-blue-400">
            Book Now
          </button>

          {/* MOBILE GLOW BUTTON */}
          <button
            onClick={() => scrollTo("book")}
            className="
              mt-4 relative bg-blue-600 py-2 rounded text-white
              shadow-lg shadow-blue-500/30
              overflow-hidden animate-pulse
            "
          >
            Reserve Vehicle

            <span className="absolute inset-0 bg-blue-500 blur-md opacity-40 animate-ping"></span>
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;