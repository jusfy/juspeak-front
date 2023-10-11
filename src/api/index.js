import axios from 'axios';

//const API_URL = 'https://juspeak.mrprompt.com.br/api/v1';
const API_URL = `${import.meta.env.VITE_API_URL}/api/v1` || 'http://localhost:5734/api/v1';

export const postTranscription = (formData) =>
  axios.post(`${API_URL}/transcription`, formData);

export const postProcess = (message) =>
  axios.post(`${API_URL}/process`, { message: message });
