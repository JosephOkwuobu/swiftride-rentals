import { useState } from "react";
import { MessageCircle, X, Calendar } from "lucide-react";

const FloatingQuickBook = () => {
  const [open, setOpen] = useState(false);

  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const Sms = () => {
    const message =
      "Hello SwiftRide Rentals, I want to book a vehicle.";

    window.location.href =
      `sms:+18043972181?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* Expanded Options */}
      {open && (
        <div className="flex flex-col gap-2">

          <button
            onClick={scrollToBook}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500"
          >
            <Calendar size={16} />
            Book Now
          </button>

          <button
            onClick={Sms}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-500"
          >
            <MessageCircle size={16} />
            SMS here
          </button>

        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-14 h-14 rounded-full bg-blue-700 text-white
          flex items-center justify-center
          shadow-xl hover:bg-blue-600 transition
          animate-pulse
        "
      >
        {open ? <X /> : <Calendar />}
      </button>

    </div>
  );
};

export default FloatingQuickBook;