import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

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

  // Check overlapping bookings
  const isAvailable = (carId, from, to) => {
    const data = JSON.parse(localStorage.getItem("bookings") || "{}");

    const bookings = data[carId] || [];

    return !bookings.some((b) => {
      return (
        (from >= b.from && from <= b.to) ||
        (to >= b.from && to <= b.to)
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

    if (!selectedCar) return;

    const available = isAvailable(
      selectedCar.id,
      form.from,
      form.to
    );

    if (!available) {
      alert("🚫 This car is not available for selected dates");
      return;
    }

    // Save booking
    const data = JSON.parse(localStorage.getItem("bookings") || "{}");

    if (!data[selectedCar.id]) {
      data[selectedCar.id] = [];
    }

    data[selectedCar.id].push({
      from: form.from,
      to: form.to,
    });

    localStorage.setItem("bookings", JSON.stringify(data));

    setSuccess(true);
    localStorage.removeItem("selectedCar");
  };

  return (
    <section id="book" className="max-w-4xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-8">
        Book Your Vehicle
      </h2>

      {success ? (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center flex flex-col items-center gap-2 ">
            <CheckCircle size={48} />   
          🎉 Booking Confirmed Successfully
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 shadow rounded-lg"
        >

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="car"
            value={form.car}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />

          <input
            type="date"
            name="from"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="date"
            name="to"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
          >
            Confirm Booking
          </button>

        </form>
      )}

    </section>
  );
};

export default RentalForm;