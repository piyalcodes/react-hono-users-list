import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:3010";

const apiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.get(url, config).then((response) => response.data);
  },
};
