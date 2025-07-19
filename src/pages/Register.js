import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!/^\d{10}$/.test(contact)) {
            setError("Please enter a valid 10-digit contact number.");
            return;
        }

        setError("");
        // Simulating backend API registration. Replace with an API call in production.
        const userDetails = { name, email, password, contact, address };
        localStorage.setItem("womenSafetyUser", JSON.stringify(userDetails));

        console.log("User registered:", userDetails);
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
    };

    return (
        <div className="registration-container">
            <h2>Register for Women Safety App</h2>
            <form onSubmit={handleRegistration}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Contact Number (10 digits)"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows="3"
                ></textarea>
                <button type="submit">Register</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Error message */}
        </div>
    );
};

export default Register;
