import apiClient from "./axiosClient";
import { baseURL } from "./const/apiConst";

export const generateSuggestions = (payload, contentType) => {  
  return  apiClient(contentType).post(
    `${baseURL}/generate-investment-suggestions`,
    payload
  );
};
