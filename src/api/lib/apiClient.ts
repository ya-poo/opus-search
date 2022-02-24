import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.openopus.org",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
