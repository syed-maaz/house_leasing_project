import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_URL;
const END_POINT = "unit";

const API_URL = BASE_API_URL + END_POINT;

export function getAllPropertiesByUserId(userId) {
  return axios.get(API_URL + "?user_id=" + userId);
}

export function getUnitsByPropertyId(propId) {
  return axios.get(API_URL + "?property_id=" + propId);
}

export function getUnitById(unit_id, propId) {
  return axios.get(API_URL + "?property_id=" + propId + "&unit_id=" + unit_id);
}

export function createUnit(requestBody) {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {},
  };

  if (requestBody.createdata) {
    return axios.post(API_URL, requestBody, config);
  } else {
    return axios.put(API_URL, requestBody, config);
  }
}
