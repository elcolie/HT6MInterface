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