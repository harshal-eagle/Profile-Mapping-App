import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="card">
      <img src={profile.photo} alt={profile.name} className="profile-card-img card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.description}</p>
        <button className="btn btn-primary" onClick={() => onSummaryClick(profile)}>
          View on Map
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
