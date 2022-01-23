import axios from "axios";

const ADMINS_API_BASE_URL = "http://localhost:8080/car-sell/admins";

const getAdmins = () => {
  return axios.get(ADMINS_API_BASE_URL);
};

export { getAdmins };
