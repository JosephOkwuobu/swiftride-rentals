import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const session = sessionStorage.getItem("swiftride_admin");

  if (!session) {
    return <Navigate to="/admin" replace />;
  }

  try {
    const auth = JSON.parse(session);

    if (!auth.loggedIn) {
      return <Navigate to="/admin" replace />;
    }

    if (Date.now() > auth.expires) {
      sessionStorage.removeItem("swiftride_admin");
      return <Navigate to="/admin" replace />;
    }

    return children;
  } catch {
    sessionStorage.removeItem("swiftride_admin");
    return <Navigate to="/admin" replace />;
  }
};

export default ProtectedRoute;