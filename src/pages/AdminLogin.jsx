import { useState } from "react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "SwiftRide2026") {
      localStorage.setItem("adminAuth", "true");
      window.location.href = "/admin-bookings";
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;