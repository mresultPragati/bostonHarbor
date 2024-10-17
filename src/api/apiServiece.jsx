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

export const placeOrder = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/order_placed`, payload);
};

export const getPriceOfUnit = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/current_stock_price`, payload);
};

export const getClientOrderList = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/show_order_list`, payload);
};

export const getDividendYield = (payload, contentType) => {
  return apiClient(contentType).post(`${baseURL}/dividend_yield`, payload);
};

export const getPortfolioList = (payload, contentType = "application/json") => {
  return apiClient(contentType).post(`${baseURL}/portfolio`, payload);
};
