import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register.css";
import { filterDeals } from "../Services/DealsService";

const FileSeach = () => {
  let navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [cc, setCc] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [hp, setHp] = useState(0);
  const [year1, setYear] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(price, cc, year1, hp, String(fuel));
    filterDeals(Number(price), Number(cc), Number(year1), Number(hp), fuel);
    navigate("alldeals");
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "0%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: "grey",
      }}
      className="card col-md-9 offset-md-6 offset-md-6"
    >
      <h2>Enter the searching criterias:</h2>
      <form className="formm" onSubmit={handleOnSubmit}>
        <div className="input-grouppp">
          <label id="price"> price</label>
          <input
            type="text"
            value={price}
            placeholder="Enter the price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-grouppp">
          <label> CC </label>
          <input
            type="text"
            value={cc}
            placeholder="Enter engine capacity"
            onChange={(e) => setCc(e.target.value)}
          />
        </div>
        <div className="input-grouppp">
          <label>Fuel</label>
          <input
            type="text"
            value={fuel}
            placeholder="Enter fuel : GPL/BENZINA/DIESEL"
            onChange={(e) => setFuel(e.target.value)}
          />
        </div>
        <div className="input-grouppp">
          <label> HP </label>
          <input
            type="text"
            value={hp}
            placeholder="Enter hourse power"
            onChange={(e) => setHp(e.target.value)}
          />
        </div>

        <div className="input-grouppp">
          <label>Ending year</label>
          <input
            type="text"
            value={year1}
            placeholder="Enter the starting year"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button className="buton ret det">Search</button>
      </form>
    </div>
  );
};
export default FileSeach;
