import axios from "axios";
import { serialize } from "object-to-formdata";

const apiKey = process.env.REACT_APP_FRESHDESK_API_KEY;
const baseUrl = "https://leaseninja.freshdesk.com/api/v2/";

const config = {
  headers: {
    Authorization: "Basic " + btoa(apiKey + ":x"),
    "Content-Type": "application/json"
  }
};

export const addTicket = (files, ticket) => {
  const formDateConfig = {
    ...config,
    header: {
      ...config.headers,
      "Content-Type": "multipart/form-data"
    }
  };
  const url = `${baseUrl}tickets/`;
  const formData = serialize(ticket);

  if (files) {
    files.forEach((file) => {
      formData.append("attachments[]", file);
    })
  }

  return axios.post(url, formData, formDateConfig);
};

export const getTickets = user => {
  const url = `${baseUrl}tickets/?include=requester&email=${user.attributes.email}`;
  return axios.get(url, config);
};

export const getTicket = id => {
  const url = `${baseUrl}tickets/${id}/?include=requester`;
  return axios.get(url, config);
};

export const closeTicket = (id, currentStatus) => {
  const url = `${baseUrl}tickets/${id}`;
  return axios.put(url, {
    status: currentStatus === 5 ? 2 : 5
  }, config);
}

export const addReply = (id, files, reply) => {
  const formDateConfig = {
    ...config,
    header: {
      ...config.headers,
      "Content-Type": "multipart/form-data"
    }
  };
  const url = `${baseUrl}tickets/${id}/reply`;
  const formData = serialize(reply);

  if (files) {
    files.forEach((file) => {
      formData.append("attachments[]", file);
    })
  }

  return axios.post(url, formData, formDateConfig);
};

export const getReplies = id => {
  const url = `${baseUrl}tickets/${id}/conversations`;
  return axios.get(url, config);
};
