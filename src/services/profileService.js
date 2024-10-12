// profileService.js
import axios from 'axios';

export const fetchProfiles = async () => {
  const response = await axios.get('/api/profiles');
  return response.data;
};

export const addProfile = async (profile) => {
  await axios.post('/api/profiles', profile);
};
