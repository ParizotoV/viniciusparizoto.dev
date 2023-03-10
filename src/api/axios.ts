import axios from 'axios';

export const getAPIClient = () => {
  const baseURL = 'https://api.github.com/users';

  const api = axios.create({ baseURL });

  return api;
};
