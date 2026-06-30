import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_PASSWORD = "SwiftRide2026";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== ADMIN_PASSWORD) {
      alert("Invalid Password");
      return;
    }

    const session = {
      loggedIn: true,
      expires: Date.now() + 1000 * 60 * 60 * 4, // 4 hours
    };

    sessionStorage.setItem(
      "swiftride_admin",
      JSON.stringify(session)
    );

    navigate("/admin/bookings");
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
          className="w-full p-3 rounded-lg mb-4 bg-gray-800 border border-gray-700 text-white"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;