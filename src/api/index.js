import axios from 'axios';

const API_URL = 'https://juspeak.mrprompt.com.br/api/v1';

export const postTranscription = (formData) =>
  axios.post(`${API_URL}/transcription`, formData);

export const postProcess = (message) =>
  axios.post(`${API_URL}/process`, { message: message });
