import { useState } from "react";
import { Car, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/30">
              <Car size={22} />
            </div>

            <h1 className="text-xl font-bold tracking-wide">
              SwiftRide
              <span className="text-blue-400"> Rentals</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14 text-[15px] font-medium">

            <button
              onClick={() => scrollTo("home")}
              className="relative transition hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="relative transition hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("fleet")}
              className="relative transition hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Fleet
            </button>

            <button
              onClick={() => scrollTo("book")}
              className="relative transition hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              Book
            </button>

          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("book")}
            className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition duration-300 px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:scale-105"
          >
            Reserve Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>

        </div>

      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-50"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-gray-900 border-l border-gray-800 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">

          <div className="flex items-center gap-2 font-bold text-lg">

            <Car
              className="text-blue-400"
              size={22}
            />

            SwiftRide

          </div>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 gap-6 text-base">

          <button
            onClick={() => scrollTo("home")}
            className="text-left hover:text-blue-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="text-left hover:text-blue-400 transition"
          >
            About
          </button>

          <button
            onClick={() => scrollTo("fleet")}
            className="text-left hover:text-blue-400 transition"
          >
            Fleet
          </button>

          <button
            onClick={() => scrollTo("book")}
            className="text-left hover:text-blue-400 transition"
          >
            Book Now
          </button>

          <button
            onClick={() => scrollTo("book")}
            className="mt-6 bg-blue-600 hover:bg-blue-500 transition py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
          >
            Reserve Vehicle
          </button>

        </div>

      </div>
    </>
  );
};

export default Navbar;