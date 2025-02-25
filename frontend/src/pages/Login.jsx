import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { email, password });

      console.log("Login Response:", res.data); // Debugging

      if (!res.data || !res.data.user || !res.data.token) {
        console.error("Error: Missing user or token in response!");
        return;
      }

      // Store token & user data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user); // Updates global state

      console.log("Navigating to:", res.data.user.role === "admin" ? "/admin" : "/"); // Debugging
      navigate(res.data.user.role === "admin" ? "/admin" : "/");
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 w-full" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2 w-full" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">
          Login
        </button>
      </form>

      <p className="mt-3 text-center">
        New user? <Link to="/register" className="text-blue-600">Click here to sign up</Link>
      </p>
    </div>
  );
};

export default Login;
