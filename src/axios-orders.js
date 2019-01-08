import axios from "axios";
import apiBaseUrl from "./apiKeys";

const instance = axios.create({
  baseURL: apiBaseUrl.baseURL
});

export default instance;
