import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});
