import axios from 'axios';
import urls from "../env"

const BASE_URL = urls.BASE_URL + urls.EXTENSION;

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Define common API methods
const get = (url, config = {}) => {
  return apiClient.get(url, config);
};

const remove = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const put = (url, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const post = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export { get, remove, put, post };