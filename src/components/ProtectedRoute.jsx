import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("adminAuth");

  if (auth === "true") {
    return children;
  }

  return <Navigate to="/admin" replace />;
};

export default ProtectedRoute;