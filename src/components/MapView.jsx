import React, { useEffect } from 'react';

const MapView = ({ address }) => {
  const { latitude, longitude } = address;

  useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], 13);

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

   
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(address.name)
      .openPopup();

  
    return () => {
      map.remove();
    };
  }, [latitude, longitude, address.name]);

  return (
    <div id="map" ></div>
  );
};

export default MapView;
