import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you will add styles in a separate CSS file

// Import images locally
import empowerImage from './images/empowerImage.jpg';
import stayAlertImage from './images/stayAlertImage.jpg';
import supportImage from './images/supportImage.jpg';
import secureImage from './images/secure.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="auth-container">
                <div className="auth-card">
                    <h1>Welcome to Stay Safe</h1>
                    <div className="buttons">
                        <Link to="/register" className="btn">Register</Link>
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                </div>
            </div>

            <div className="info-cards">
                <div className="card">
                    <img src={empowerImage} alt="Empower Yourself" className="card-img" />
                    <h2>Empower Yourself</h2>
                    <p>Women's safety is important, and knowledge is power. Stay informed and be prepared.</p>
                </div>
                <div className="card">
                    <img src={stayAlertImage} alt="Stay Alert" className="card-img" />
                    <h2>Stay Alert</h2>
                    <p>Use the features of the app to track your location and send emergency alerts if needed.</p>
                </div>
                <div className="card">
                    <img src={supportImage} alt="Support Network" className="card-img" />
                    <h2>Support Network</h2>
                    <p>Connect with trusted guardians and share your location to feel safer at all times.</p>
                </div>
                <div className="card">
                    <img src={secureImage} alt="Stay Secure" className="card-img" />
                    <h2>Stay Secure</h2>
                    <p>Take advantage of all the app features to ensure you are secure wherever you go.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
