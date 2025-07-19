import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css"; // Import CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const VALID_EMAIL = "visvardhan@gmail.com";
    const VALID_PASSWORD = "password123";

    const handleLogin = (e) => {
        e.preventDefault();

        // Trim email and password to prevent leading/trailing spaces
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (trimmedEmail === VALID_EMAIL && trimmedPassword === VALID_PASSWORD) {
            setError(""); // Clear any previous error messages
            console.log("Successfully logged in!");
            navigate("/dashboard");
        } else {
            setError("Invalid email or password. Please try again."); // Show error if credentials don't match
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Display error */}
        </div>
    );
};

export default Login;
