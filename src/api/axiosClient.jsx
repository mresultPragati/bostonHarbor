import axios from "axios";

const apiClient = (contentType) => {
  return axios.create({
    // Later read this URL from an environment variable
    // baseURL: process.env.REACT_APP_API_REDIRECT,
    headers: {
      "Content-Type": contentType ? contentType : "",
    },
  });
};

export default apiClient;
