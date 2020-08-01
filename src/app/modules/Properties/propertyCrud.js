import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;
export const END_POINT = "properties";

const getAPIURL = () => API_URL + END_POINT;

export function getAllPropertiesByUserId(userId) {
  return axios.get(getAPIURL() + "?user_id=" + userId);
}
