import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "SwiftRide2026") {
      // Save admin session
      localStorage.setItem("adminAuth", "true");

      // Redirect to Admin Bookings
      navigate("/admin/bookings");
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg"
      >
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;