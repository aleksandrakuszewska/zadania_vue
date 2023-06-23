import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  // inne opcje, np. nagłówki, tokeny uwierzytelniające itp.
});

export default apiClient;
