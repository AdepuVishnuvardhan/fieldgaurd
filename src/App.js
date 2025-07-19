import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ScreamAlarm from "./components/ScreamAlarm";
import FakeCallTimer from "./components/FakeCallTimer";
import WhereAreYou from "./components/WhereAreYou";
import TrackMe from "./components/TrackMe";
import FriendsList from "./components/FriendsList";
import Settings from "./components/Settings";

// Optional NotFound page if needed
const NotFound = () => <h2>404 - Page Not Found</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to dashboard or home */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* Dashboard and Features */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scream-alarm" element={<ScreamAlarm />} />
        <Route path="/fake-call-timer" element={<FakeCallTimer />} />
        <Route path="/where-are-you" element={<WhereAreYou />} />
        <Route path="/track-me" element={<TrackMe />} />
        <Route path="/friends-list" element={<FriendsList />} />
        <Route path="/settings" element={<Settings />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
