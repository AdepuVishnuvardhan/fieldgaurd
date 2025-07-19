import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/scream-alarm" element={<ScreamAlarm />} />
                <Route path="/fake-call-timer" element={<FakeCallTimer />} />
                <Route path="/where-are-you" element={<WhereAreYou />} />
                <Route path="/track-me" element={<TrackMe />} />
                <Route path="/friends-list" element={<FriendsList />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default App;
