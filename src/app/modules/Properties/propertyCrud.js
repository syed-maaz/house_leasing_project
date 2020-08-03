import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_URL;
const END_POINT = "properties";

const API_URL = BASE_API_URL + END_POINT;

export function getAllPropertiesByUserId(userId) {
  return axios.get(API_URL + "?user_id=" + userId);
}

export function createProperty(requestBody) {
  requestBody = {
    createdata: requestBody,
  };
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {},
  };
  debugger;
  return axios.post(API_URL, requestBody, config);
}
