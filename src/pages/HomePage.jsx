// HomePage.jsx
import React, { useState, useEffect } from 'react';
import ProfileList from '../components/ProfileList';
import MapView from '../components/MapView';
import { fetchProfiles } from '../services/profileService';

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchProfiles().then((data) => setProfiles(data));
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container">
      <h1>Profile Mapping</h1>
      <ProfileList profiles={profiles} onSummaryClick={handleSummaryClick} />
      {selectedProfile && <MapView address={selectedProfile.address} />}
    </div>
  );
};

export default HomePage;
