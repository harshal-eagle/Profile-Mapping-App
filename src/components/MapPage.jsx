
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapView from './MapView';

const MapPage = ({ profiles }) => {
  const { id } = useParams(); 
  const profileId = parseInt(id); 
  const profile = profiles.find(p => p.id === profileId); 
  const navigate = useNavigate();

  if (!profile) {
    return <div>Profile not found!</div>;
  }

  return (
    <div>
      <h2>{profile.name}'s Location</h2>
      <MapView address={profile.address} />

      
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        Back to Profiles
      </button>
    </div>
  );
};

export default MapPage;
