import React, { useState } from "react";
import './userprofile.css'

function UserProfilePage() {
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bioData, setBioData] = useState("");
  const [email, setEmail] = useState("");


  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBioDataChange = (e) => {
    setBioData(e.target.value);
  };

  return (
    <div className="user-profile">
        <h1>Update your profile</h1>
      <img src={profilePicture} alt="Profile" />
      <form>
        <label htmlFor="profile-picture">Profile Picture:</label>
        <input
          type="file"
          id="profile-picture"
          onChange={handleProfilePictureChange}
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="bio-data">Bio Data:</label>
        <textarea
          id="bio-data"
          value={bioData}
          onChange={handleBioDataChange}
        />
        <button type="submit">Save Changes</button>
      </form>
      <div className="profile-summary">
       
      </div>
    </div>
  );
}

export default UserProfilePage;
