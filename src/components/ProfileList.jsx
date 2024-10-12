import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  const navigate = useNavigate();

  const handleSummaryClick = (id) => {
    navigate(`/map/${id}`); 
  };

  return (
    <div className="row">
      {profiles.map((profile) => (
        <div className="col-md-4" key={profile.id}>
          <ProfileCard profile={profile} onSummaryClick={() => handleSummaryClick(profile.id)} />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
