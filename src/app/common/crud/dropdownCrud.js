import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;
const END_POINT = "dropdown";

export const GET_PROPERTY_TYPE = "getpropertytype";
export const GET_STATES = "getstates";

const API_URL = API_BASE_URL + END_POINT;

export function getDropdownValues(operationType) {
  return axios.get(API_URL + "?operation=" + operationType);
}
