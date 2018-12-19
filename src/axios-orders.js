import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-api.firebaseio.com/ingredients.json"
});

export default instance;
