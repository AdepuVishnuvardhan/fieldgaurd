import React, { useEffect, useState } from "react";
import "../assets/css/settings.css"; // Import the CSS file for styling

const Settings = () => {
    const [isEmergencyServiceOn, setEmergencyServiceOn] = useState(false);
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [shakeDetected, setShakeDetected] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    // Call Emergency Services
    const callEmergency = () => {
        if (isEmergencyServiceOn) {
            // Open the emergency dialer or send an emergency call
            alert("Calling Emergency Services...");
            window.location.href = "tel:112"; // or use emergency number
        } else {
            alert("Emergency services are off. Please turn it on in settings.");
        }
    };

    // Monitor Low Battery Alerts using Battery Status API
    useEffect(() => {
        const updateBatteryStatus = async () => {
            if ("getBattery" in navigator) {
                const battery = await navigator.getBattery();
                setBatteryLevel(battery.level * 100);

                battery.addEventListener("levelchange", () => {
                    setBatteryLevel(battery.level * 100);
                });
            }
        };
        updateBatteryStatus();
    }, []);

    // Shake detection using DeviceMotion API
    useEffect(() => {
        const handleShake = (event) => {
            // Threshold for shake detection (simple method for illustration)
            const shakeThreshold = 20;
            const x = event.acceleration.x;
            const y = event.acceleration.y;
            const z = event.acceleration.z;

            const shakeMagnitude = Math.sqrt(x * x + y * y + z * z);
            if (shakeMagnitude > shakeThreshold) {
                setShakeDetected(true);
                setTimeout(() => {
                    setShakeDetected(false);
                }, 5000); // Clear the shake detection after 5 seconds

                alert("Distress Signal Activated! Sending message to emergency contacts.");
                sendDistressSignal();
            }
        };

        window.addEventListener("devicemotion", handleShake);

        return () => window.removeEventListener("devicemotion", handleShake); // Clean up listener
    }, []);

    // Send Distress Signal (SOS)
    const sendDistressSignal = () => {
        if (isEmergencyServiceOn && shakeDetected) {
            // Simulate sending distress signal to emergency contacts (could be via API, SMS, or push)
            setMessageSent(true);
            alert("Distress Signal Sent! Emergency Contacts Notified.");
            // Optionally, you could add location and other details here, e.g. `navigator.geolocation.getCurrentPosition()`
        } else {
            alert("Please enable emergency services and shake your phone to send the signal.");
        }
    };

    return (
        <div className="container">
            <div className="settings-box">
                <h1>Settings</h1>
                <ul>
                    <li>
                        <button onClick={callEmergency}>Call Emergency Services</button>
                    </li>
                    <li>
                        Battery Level: {batteryLevel ? `${batteryLevel}%` : "N/A"}
                        {batteryLevel < 20 && <span> - Low Battery Alert!</span>}
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                checked={isEmergencyServiceOn}
                                onChange={() => setEmergencyServiceOn(!isEmergencyServiceOn)}
                            />
                            Emergency Services: {isEmergencyServiceOn ? "On" : "Off"}
                        </label>
                    </li>
                    <li>
                        <button onClick={sendDistressSignal} disabled={!isEmergencyServiceOn}>
                            Trigger Emergency Distress Signal
                        </button>
                        {messageSent && <span> Distress Signal Sent!</span>}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Settings;
