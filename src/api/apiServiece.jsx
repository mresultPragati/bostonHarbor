import apiClient from "./axiosClient";
import { baseURL } from "./const/apiConst";

export const generateSuggestions = (payload, contentType) => {  
  return  apiClient(contentType).post(
    `${baseURL}/generate-investment-suggestions`,
    payload
  );
};

export const generateSuggestionByClientId = (payload, contentType) => {  
   return  apiClient(contentType).post(
    `${baseURL}/personality-assessment`,
    payload
  );
};

export const investmentPersnalityAssament = (payload, contentType) => {  
   return  apiClient(contentType).post(
    `${baseURL}/investor-personality-assessment`,
    payload
  );
};
