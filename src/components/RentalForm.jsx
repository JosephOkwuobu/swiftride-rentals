import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import cars from "../data/cars";

const RentalForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    from: "",
    to: "",
  });

  const [success, setSuccess] = useState(false);

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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isAvailable = (carName, from, to) => {
    const data = JSON.parse(localStorage.getItem("bookings") || "{}");

    const bookings = data[carName] || [];

    return !bookings.some((b) => {
      return (
        (from >= b.from && from <= b.to) ||
        (to >= b.from && to <= b.to) ||
        (from <= b.from && to >= b.to)
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.car) {
      alert("Please select a vehicle");
      return;
    }

    const available = isAvailable(
      form.car,
      form.from,
      form.to
    );

    if (!available) {
      alert("This vehicle is already booked for the selected dates.");
      return;
    }

    const data = JSON.parse(localStorage.getItem("bookings") || "{}");

    if (!data[form.car]) {
      data[form.car] = [];
    }

    data[form.car].push({
      from: form.from,
      to: form.to,
      name: form.name,
      phone: form.phone,
    });

    localStorage.setItem("bookings", JSON.stringify(data));

    setSuccess(true);

    localStorage.removeItem("selectedCar");
  };

  return (
    <section
      id="book"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Book Your Vehicle
      </h2>

      {success ? (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center flex flex-col items-center gap-2">
          <CheckCircle size={48} />
          <h3 className="font-bold text-xl">
            Booking Confirmed Successfully
          </h3>
          <p>
            Thank you for choosing SwiftRide Rentals.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 shadow rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* VEHICLE DROPDOWN */}
          <select
            name="car"
            value={form.car}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">
              Select Vehicle
            </option>

            {cars.map((car) => (
              <option
                key={car.id}
                value={car.name}
              >
                {car.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="from"
            value={form.from}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="date"
            name="to"
            value={form.to}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </section>
  );
};

export default RentalForm;