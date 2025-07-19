import React, { useState } from "react";
import "../assets/css/FriendsList.css"; // Import CSS file for styling

const FriendsList = () => {
    const [friends, setFriends] = useState(["John", "Jane", "Emily"]); // Initial friends list
    const [newFriend, setNewFriend] = useState(""); // For entering a new friend's name
    const [message, setMessage] = useState(""); // For selecting a predefined message

    // Handle adding a new friend
    const addFriend = () => {
        if (newFriend && !friends.includes(newFriend)) {
            setFriends([...friends, newFriend]);
            setNewFriend(""); // Reset input field
        } else {
            alert("Friend already exists or input is empty!");
        }
    };

    // Handle sending a message
    const sendMessage = (friend) => {
        if (message) {
            alert(`Sent message: "${message}" to ${friend}`);
        } else {
            alert("Please select a message to send.");
        }
    };

    return (
        <div className="container">
            <div className="friends-box">
                <h1>Friends List</h1>

                {/* Input to add new friend */}
                <div>
                    <input
                        type="text"
                        value={newFriend}
                        onChange={(e) => setNewFriend(e.target.value)}
                        placeholder="Add a friend"
                    />
                    <button onClick={addFriend}>Add Friend</button>
                </div>

                {/* Friends List */}
                <ul>
                    {friends.map((friend, index) => (
                        <li key={index}>
                            {friend}
                            {/* Dropdown for messages */}
                            <select
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            >
                                <option value="">Select a message</option>
                                <option value="Help">Help</option>
                                <option value="Call">Call</option>
                                <option value="Emergency">Emergency</option>
                            </select>
                            <button onClick={() => sendMessage(friend)}>
                                Send Message
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FriendsList;
