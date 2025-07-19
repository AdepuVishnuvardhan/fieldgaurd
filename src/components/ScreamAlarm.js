import React from "react";
import { Howl } from "howler";
import "../assets/css/ScreamAlarm.css";  // Ensure this CSS file exists and contains necessary styling

const ScreamAlarm = () => {
    const playSound = (soundFile) => {
        const audio = new Howl({ src: [soundFile] });
        audio.play();
    };

    return (
        <div className="scream-alarm-container">
            <div className="card" onClick={() => playSound(require("../assets/audio/male.wav"))}>
                <img src="/images/male.jpg" alt="Male Scream Icon" className="card-image" />
                <p>Male Scream</p>
            </div>
            <div className="card" onClick={() => playSound(require("../assets/audio/police.mp3"))}>
                <img src="C:\Users\Admin\OneDrive\Desktop\women safe\my\src\assets\images\siren.jpg" alt="Police Siren Icon" className="card-image" />
                <p>Police Siren</p>
            </div>
        </div>
    );
};

export default ScreamAlarm;
