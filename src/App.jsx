import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import MapPage from './components/MapPage';
import AdminPanel from './components/AdminPanel';
import SearchComponent from './components/SearchComponent'; 
import './styles.css'; 

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', photo: './img1.jpg', description: 'A cool person', address: { name: 'John\'s House', latitude: 51.505, longitude: -0.09 } },
    { id: 2, name: 'Jane Smith', photo: './img2.jpg', description: 'Another cool person', address: { name: 'Jane\'s House', latitude: 51.515, longitude: -0.10 } }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="container">
        <h1>Profile Mapping App</h1>

        
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                
                <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ProfileList profiles={filteredProfiles} />
                <AdminPanel addProfile={addProfile} />
              </>
            }
          />

          
          <Route path="/map/:id" element={<MapPage profiles={profiles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
