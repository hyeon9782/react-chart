import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json;",
  },
});

instance.interceptors.request.use();

instance.interceptors.response.use();
