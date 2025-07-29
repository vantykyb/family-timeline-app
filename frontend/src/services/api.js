import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUserTimeline = async (userId) => {
  const res = await axios.get(`${API_URL}/users/${userId}`);
  return res.data.events;
};