import axios from "axios";

const USERS_API_BASE_URL = "http://localhost:8080/car-sell/users";
const USERS_API_ADD_USER = "http://localhost:8080/car-sell/addUser";

const getUsers = () => {
  return axios.get(USERS_API_BASE_URL);
};

const addUser = (newUser) => {
  return axios.post(USERS_API_ADD_USER, newUser);
};

export { getUsers, addUser };
