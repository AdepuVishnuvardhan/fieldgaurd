import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const WhereAreYou = () => {
    const [friend, setFriend] = useState("");
    const [location, setLocation] = useState(null); // Initialize with null

    // Fetch the current location of the user
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    alert("Unable to retrieve location. Please enable location services.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }, []);

    const sendRequest = () => {
        alert(`Request sent to ${friend}`);
    };

    const handleLocationChange = useCallback((e) => {
        setLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
    }, []);

    const mapContainerStyle = {
        height: "400px",
        width: "100%",
        borderRadius: "10px",
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Where Are You?</h1>
            <input
                type="text"
                placeholder="Enter Friend's Name"
                value={friend}
                onChange={(e) => setFriend(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    marginBottom: "10px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={sendRequest}
                style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
            >
                Send Request
            </button>

            <div style={{ marginTop: "30px" }}>
                <h2>Track Your Friend's Location on the Map</h2>
                {location ? (
                    <LoadScript googleMapsApiKey="AIzaSyB0jxwyRrAdRlsYnlppEBLMApycDOBm5OY">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={15}
                            center={location}
                            onClick={handleLocationChange}
                        >
                            <Marker position={location} />
                        </GoogleMap>
                    </LoadScript>
                ) : (
                    <p>Loading your current location...</p>
                )}
            </div>
        </div>
    );
};

export default WhereAreYou;
