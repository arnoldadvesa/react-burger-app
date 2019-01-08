import axios from "axios";
import * as apiBaseUrl from "./apiKey";

const instance = axios.create({
  baseURL: apiBaseUrl.baseURL
});

export default instance;
