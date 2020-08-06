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
    },
    data: fileData,
  };

  return axios.options(uploadUrl, config);
}
