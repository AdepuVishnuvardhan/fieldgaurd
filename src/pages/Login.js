import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const VALID_EMAIL = "visvardhan@gmail.com";
  const VALID_PASSWORD = "password123";

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === VALID_EMAIL && trimmedPassword === VALID_PASSWORD) {
      setError("");
      console.log("Successfully logged in!");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2"
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width: "300px"
      }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px",
              fontSize: "16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
