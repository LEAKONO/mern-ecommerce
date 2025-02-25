import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  console.log("AdminRoute - user:", user); // Debugging
  console.log("AdminRoute - loading:", loading); // Debugging

  if (loading) {
    console.log("AdminRoute - Loading..."); // Debugging
    return <p>Loading...</p>; // Show loading while fetching user data
  }

  if (!user) {
    console.log("AdminRoute - No user, redirecting to /login"); // Debugging
    return <Navigate to="/login" replace />; // Redirect if no user
  }

  if (user.role !== "admin") {
    console.log("AdminRoute - User is not admin, redirecting to /"); // Debugging
    return <Navigate to="/" replace />; // Redirect if not admin
  }

  console.log("AdminRoute - User is admin, rendering children"); // Debugging
  return children; // Render the protected admin page
};

export default AdminRoute;