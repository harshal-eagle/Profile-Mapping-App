// AdminPanel.jsx
import React, { useState } from 'react';

const AdminPanel = ({ addProfile }) => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    latitude: '',
    longitude: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.latitude || !formData.longitude) {
      alert('Please fill out all fields!');
      return;
    }

    const newProfile = {
      id: Date.now(),  
      name: formData.name,
      photo: formData.photo || 'https://via.placeholder.com/150', 
      description: formData.description,
      address: {
        name: formData.name,
        latitude: parseFloat(formData.latitude),  
        longitude: parseFloat(formData.longitude)  
      }
    };

    addProfile(newProfile);

    setFormData({
      name: '',
      photo: '',
      description: '',
      latitude: '',
      longitude: ''
    });
  };

  return (
    <div className="my-3">
      <h2>Add a New Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
          className="form-control my-2"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
          className="form-control my-2"
        />
        <button type="submit" className="btn btn-primary">Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;
