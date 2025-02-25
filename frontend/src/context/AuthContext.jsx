import { createContext, useState, useEffect } from "react";
import API from "../api"; // Ensure this correctly points to your backend API

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("AuthProvider - Initializing..."); // Debugging

  useEffect(() => {
    console.log("AuthProvider - Fetching user data..."); // Debugging
    API.get("/users")
      .then((res) => {
        console.log("AuthProvider - User data fetched:", res.data); // Debugging
        setUser(res.data.user); // Ensure this contains role: "admin"
      })
      .catch((err) => {
        console.error("AuthProvider - Error fetching user data:", err); // Debugging
        setUser(null);
      })
      .finally(() => {
        console.log("AuthProvider - Loading set to false"); // Debugging
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;