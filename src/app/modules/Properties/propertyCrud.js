import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_URL;
const END_POINT = "properties";

const API_URL = BASE_API_URL + END_POINT;

export function getAllPropertiesByUserId(userId) {
  return axios.get(API_URL + "?user_id=" + userId);
}

export function getPropertyById(propId, userId) {
  return axios.get(API_URL + "?user_id=" + userId + "&property_id=" + propId);
}

export function createProperty(requestBody, unitList) {
  requestBody = {
    createdata: requestBody
  };
  if (unitList.length > 0) {
    requestBody.unitlist = unitList;
  }
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    data: {}
  };

  return axios.post(API_URL, requestBody, config);
}

export function updateProperty(requestBody, property_id, user_id) {
  requestBody = {
    updatedata: requestBody,
    property_id,
    user_id
  };

  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    data: {}
  };

  return axios.put(API_URL, requestBody, config);
}

export function deleteProperty(property_id, user_id) {
  const requestBody = {
    property_id,
    user_id
  };

  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    data: requestBody
  };

  return axios.delete(API_URL, config);
}
