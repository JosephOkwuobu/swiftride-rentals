import { Car, MessageCircle, Calendar } from "lucide-react";

const VehicleCard = ({ car }) => {

  const handleSMS = () => {
    const message = `Hello SwiftRide Rentals, I want to book: ${car.name}`;

    window.location.href =
      `sms:+18043972181?body=${encodeURIComponent(message)}`;
  };

  const handleReserve = () => {
    localStorage.setItem("selectedCar", JSON.stringify(car));

    const form = document.getElementById("book");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden">

      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg flex items-center gap-2">
          <Car size={18} />
          {car.name}
        </h3>

        <p className="text-gray-600">
          {car.price}
        </p>

        <div className="space-y-2 mt-4">

          <button
            onClick={handleReserve}
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Reserve Vehicle
          </button>

          <button
            onClick={handleSMS}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Book via SMS
          </button>

        </div>

      </div>

    </div>
  );
};

export default VehicleCard;