import axios from "axios";
import envVariables from "../Configs/envVariables";

const api = (() => {
  axios.defaults.withCredentials = true;

  return axios.create({
    baseURL: envVariables.baseUrl,
  });
})();

export default api;
