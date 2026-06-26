import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  Car,
  Trash2,
  LogOut,
  CalendarDays,
} from "lucide-react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    active: 0,
    completed: 0,
  });

  const fetchBookings = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
    } else {
      setBookings(data || []);

      setStats({
        total: data.length,

        pending: data.filter(
          (b) => b.status === "Pending"
        ).length,

        active: data.filter(
          (b) => b.status === "Active"
        ).length,

        completed: data.filter(
          (b) => b.status === "Completed"
        ).length,
      });
    }

    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to update status");
      return;
    }

    fetchBookings();
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to delete booking");
      return;
    }

    fetchBookings();
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/admin-login";
  };

  useEffect(() => {
    fetchBookings();

    const channel = supabase
      .channel("bookings-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookings",
        },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

          <h1 className="text-4xl font-bold">
            Admin Bookings Dashboard
          </h1>

          <button
            onClick={logout}
            className="
              flex items-center gap-2
              bg-red-600 hover:bg-red-700
              px-5 py-3 rounded-xl
              transition
            "
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

        {/* Analytics */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">

          <div className="bg-blue-900 p-5 rounded-2xl">
            <p className="text-gray-300">
              Total Bookings
            </p>
            <h2 className="text-3xl font-bold">
              {stats.total}
            </h2>
          </div>

          <div className="bg-yellow-700 p-5 rounded-2xl">
            <p className="text-gray-300">
              Pending
            </p>
            <h2 className="text-3xl font-bold">
              {stats.pending}
            </h2>
          </div>

          <div className="bg-green-700 p-5 rounded-2xl">
            <p className="text-gray-300">
              Active
            </p>
            <h2 className="text-3xl font-bold">
              {stats.active}
            </h2>
          </div>

          <div className="bg-purple-700 p-5 rounded-2xl">
            <p className="text-gray-300">
              Completed
            </p>
            <h2 className="text-3xl font-bold">
              {stats.completed}
            </h2>
          </div>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-gray-400">
            Loading bookings...
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-gray-900 p-10 rounded-2xl text-center">
            No bookings found.
          </div>
        ) : (
          <div className="grid gap-6">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  bg-gray-900/80
                  border border-gray-800
                  backdrop-blur-md
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-3 mb-4">

                  <Car
                    className="text-blue-400"
                    size={22}
                  />

                  <h2 className="text-xl font-bold">
                    {booking.car}
                  </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-3 text-gray-300">

                  <p>
                    <span className="font-semibold text-white">
                      Customer:
                    </span>{" "}
                    {booking.name}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Phone:
                    </span>{" "}
                    {booking.phone}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Pickup:
                    </span>{" "}
                    {booking.pickup_date}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Return:
                    </span>{" "}
                    {booking.return_date}
                  </p>

                </div>

                {/* Status */}
                <div className="mt-5">

                  <label className="block mb-2 text-sm text-gray-400">
                    Booking Status
                  </label>

                  <select
                    value={booking.status || "Pending"}
                    onChange={(e) =>
                      updateStatus(
                        booking.id,
                        e.target.value
                      )
                    }
                    className="
                      bg-gray-800
                      border border-gray-700
                      rounded-lg
                      px-4 py-2
                      text-white
                    "
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>

                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-3">

                  <button
                    onClick={() =>
                      deleteBooking(booking.id)
                    }
                    className="
                      flex items-center gap-2
                      bg-red-600 hover:bg-red-700
                      px-4 py-2 rounded-lg
                    "
                  >
                    <Trash2 size={18} />
                    Cancel Booking
                  </button>

                  <div
                    className="
                      flex items-center gap-2
                      bg-blue-800
                      px-4 py-2
                      rounded-lg
                    "
                  >
                    <CalendarDays size={18} />
                    {booking.status || "Pending"}
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default AdminBookings;