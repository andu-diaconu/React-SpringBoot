import axios from "axios";

const DEALS_API_BASE_URL = "http://localhost:8080/car-sell/deals";
const DEALS_API_ADD_DEAL = "http://localhost:8080/car-sell/addDeal";

const getDeals = () => {
  return axios.get(DEALS_API_BASE_URL);
};

const addDeal = (deal) => {
  return axios.post(DEALS_API_ADD_DEAL, deal);
};

const checkPosted = (id, posted) => {
  return axios.put(`http://localhost:8080/car-sell/updateDeal/${id}/${posted}`);
};

const filterDeals = (price, cc, year1, hp, fuel) => {
  return axios.get(
    `http://localhost:8080/car-sell/searchDeals/${price}/${cc}/${year1}/${hp}/${fuel}`
  );
};

const selectBuyer = (id, buyId) => {
  return axios.put(`http://localhost:8080/car-sell/updateBuyer/${id}/${buyId}`);
};

export { getDeals, addDeal, checkPosted, filterDeals, selectBuyer };
