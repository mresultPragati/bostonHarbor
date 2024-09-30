import apiClient from "./axiosClient";
import { baseURL } from "./const/apiConst";

export const generateSuggestions = (payload, contentType) => {
  return apiClient(contentType).post(
    `${baseURL}/generate-investment-suggestions`,
    payload
  );
};

export const generateSuggestionByClientId = (payload, contentType) => {
  return apiClient(contentType).post(
    `${baseURL}/personality-assessment`,
    payload
  );
};

export const investmentPersnalityAssament = (payload, contentType) => {
  return apiClient(contentType).post(
    `${baseURL}/investor-personality-assessment`,
    payload
  );
};

export const saveClientData = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/submit-client-data`, payload);
};

export const generateStockAnalysis = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/analyze_stock`, payload);
};
