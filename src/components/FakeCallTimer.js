import React, { useState } from "react";
import "../assets/css/FakeCallTimer.css"; // Import CSS file

const FakeCallTimer = () => {
    const [timer, setTimer] = useState("");
    const [selfPhoneNumber, setSelfPhoneNumber] = useState("");
    const [callerPhoneNumber, setCallerPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [simpleTimer, setSimpleTimer] = useState("");

    const startFakeCall = () => {
        if (!selfPhoneNumber || !callerPhoneNumber || !timer) {
            alert("Please enter your number, caller's number, and a valid timer.");
            return;
        }

        setTimeout(() => {
            alert(`Incoming fake call to ${selfPhoneNumber} from ${callerPhoneNumber}`);
            if (message) {
                alert(`Message sent from ${callerPhoneNumber} to ${selfPhoneNumber}: ${message}`);
            }
        }, timer * 1000);
    };

    const startSimpleCall = () => {
        if (!simpleTimer) {
            alert("Please enter a valid timer.");
            return;
        }

        setTimeout(() => {
            alert("Simple fake call triggered!");
        }, simpleTimer * 1000);
    };

    return (
        <div className="container">
            <div className="fake-call-box">
                <h3>Detailed Fake Call</h3>
                <input
                    type="tel"
                    value={selfPhoneNumber}
                    onChange={(e) => setSelfPhoneNumber(e.target.value)}
                    placeholder="Your phone number"
                    className="phone-input"
                />
                <input
                    type="tel"
                    value={callerPhoneNumber}
                    onChange={(e) => setCallerPhoneNumber(e.target.value)}
                    placeholder="Enter caller's phone number"
                    className="phone-input"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    className="message-box"
                ></textarea>
                <input
                    type="number"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                    placeholder="Enter timer in seconds"
                    className="timer-input"
                />
                <button onClick={startFakeCall} className="start-btn">
                    Start Fake Call
                </button>
            </div>

            <div className="fake-call-box">
                <h3>Quick Fake Call</h3>
                <input
                    type="number"
                    value={simpleTimer}
                    onChange={(e) => setSimpleTimer(e.target.value)}
                    placeholder="Enter timer in seconds"
                    className="timer-input"
                />
                <button onClick={startSimpleCall} className="start-btn">
                    Trigger Quick Call
                </button>
            </div>
        </div>
    );
};

export default FakeCallTimer;
