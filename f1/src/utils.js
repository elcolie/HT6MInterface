import axios from "axios/index";
import {BACKEND_URL} from "./constants";

export const createAxios = (bigRadius, smallRadius) => {
  // Create axios instance
  return axios.create({
    method: 'POST',
    baseURL: `${BACKEND_URL}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Side effects Services
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

export const prepareJWTHeader = (token) => {
  return 'JWT ' + token
};