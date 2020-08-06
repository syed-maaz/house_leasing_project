import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;
const END_POINT = "files";

const API_URL = API_BASE_URL + END_POINT;

export function getFileUrl(fileName = "") {
  const req = "";
  if (fileName != "") {
    req = "?filename=" + fileName;
  }
  return axios.get(API_URL + req);
}

export function uploadImage(fileData, uploadUrl) {
  const config = {
    headers: {
      "Content-Type": "image/jpeg",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    data: fileData,
  };

  return axios.put(uploadUrl, fileData, config);
}
