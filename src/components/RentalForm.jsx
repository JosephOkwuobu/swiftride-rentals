 import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import cars from "../data/cars";
import { supabase } from "../lib/supabase";

const RentalForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    from: "",
    to: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const selectedCar = localStorage.getItem("selectedCar");

    if (selectedCar) {
      const car = JSON.parse(selectedCar);

      setForm((prev) => ({
        ...prev,
        car: car.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.car) {
      alert("Please select a vehicle");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          name: form.name,
          phone: form.phone,
          car: form.car,
          pickup_date: form.from,
          return_date: form.to,
          status: "Pending",
        },
      ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Booking failed. Please check your Supabase setup.");
      return;
    }

    localStorage.removeItem("selectedCar");
    setSuccess(true);

    const message =
      "SwiftRide Rental Booking\n\n" +
      "Name: " + form.name + "\n" +
      "Phone: " + form.phone + "\n" +
      "Vehicle: " + form.car + "\n" +
      "Pickup Date: " + form.from + "\n" +
      "Return Date: " + form.to;

    setTimeout(() => {
      window.location.href =
        "sms:+18043972181?body=" + encodeURIComponent(message);
    }, 1500);
  };

  return (
    <section
      id="book"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Book Your Vehicle
      </h2>

      {success ? (
        <div className="bg-green-100 text-green-800 p-8 rounded-xl shadow text-center flex flex-col items-center gap-3">
          <CheckCircle size={60} />

          <h3 className="text-2xl font-bold">
            Booking Confirmed!
          </h3>

          <p>
            Thank you for choosing SwiftRide Rentals.
            We will contact you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Select Vehicle
            </label>

            <select
              name="car"
              value={form.car}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            >
              <option value="">Choose a vehicle</option>

              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Pickup Date
            </label>

            <input
              type="date"
              name="from"
              value={form.from}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Return Date
            </label>

            <input
              type="date"
              name="to"
              value={form.to}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
          >
            {loading ? "Processing Booking..." : "Confirm Booking"}
          </button>
        </form>
      )}
    </section>
  );
};

export default RentalForm;