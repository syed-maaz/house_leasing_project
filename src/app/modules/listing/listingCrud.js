import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_URL;
const END_POINT = "listing";

const API_URL = BASE_API_URL + END_POINT;

export function getAllPropertiesByUserId(userId) {
  return axios.get(API_URL + "?user_id=" + userId);
}

export function createListing(requestBody) {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {},
  };

  return axios.post(API_URL, requestBody, config);
}
