import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Dashboard.css";

import screamAlarmImage from '../assets/images/scream.jpg';
import fakeCallImage from '../assets/images/fake-call.jpg';
import whereAreYouImage from '../assets/images/where-are-you.jpg';
import trackMeImage from '../assets/images/call.jpg';
import friendsListImage from '../assets/images/live.jpg';
import settingsImage from '../assets/images/emergency.jpg';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to the Women Safety App</h1>
        <p>Your security, our priority.</p>
      </div>

      <div className="dashboard-links">
        <Link to="/scream-alarm" className="dashboard-card">
          <img src={screamAlarmImage} alt="Scream Alarm" className="card-img" />
          <h2>Scream Alarm</h2>
          <p>Activate the alarm in emergencies to alert others and get help immediately.</p>
        </Link>

        <Link to="/fake-call-timer" className="dashboard-card">
          <img src={fakeCallImage} alt="Fake Call Timer" className="card-img" />
          <h2>Fake Call Timer</h2>
          <p>Schedule a fake call to escape uncomfortable situations.</p>
        </Link>

        <Link to="/where-are-you" className="dashboard-card">
          <img src={whereAreYouImage} alt="Where Are You?" className="card-img" />
          <h2>Where Are You?</h2>
          <p>Track and share your real-time location.</p>
        </Link>

        <Link to="/track-me" className="dashboard-card">
          <img src={trackMeImage} alt="Track Me" className="card-img" />
          <h2>Track Me</h2>
          <p>Let trusted people track your location in emergencies.</p>
        </Link>

        <Link to="/friends-list" className="dashboard-card">
          <img src={friendsListImage} alt="Friends List" className="card-img" />
          <h2>Friends List</h2>
          <p>Share your location and stay connected.</p>
        </Link>

        <Link to="/settings" className="dashboard-card">
          <img src={settingsImage} alt="Settings" className="card-img" />
          <h2>Settings</h2>
          <p>Customize alerts and safety preferences.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
