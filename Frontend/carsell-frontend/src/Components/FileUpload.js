import React from "react";
import { useState } from "react";
import "../Register.css";

const FileUpload = ({ addDeal, actual_seller_id }) => {
  const [price, setPrice] = useState(0);
  const [cc, setCc] = useState(0);
  const [fuel, setFuel] = useState("");
  const [hp, setHp] = useState(0);
  const [picture, setPicture] = useState("");
  const [year, setYear] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  //filebase 64

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isFilePicked) {
      setPicture(selectedFile.name);
      let picture = String(selectedFile.name);
      addDeal({ price, cc, year, hp, fuel, picture, actual_seller_id });

      setPrice(0);
      setPicture(0);
      setCc(0);
      setFuel("");
      setHp(0);
      setYear(0);
    }
  };

  return (
    <div
      className="Appp"
      style={{
        position: "absolute",
        left: "50%",
        top: "50.5%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form className="formm" onSubmit={handleOnSubmit}>
        <div className="input-grouppp">
          <label> price</label>
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
          <label>Year</label>
          <input
            type="text"
            value={year}
            placeholder="Enter the manufacturing year"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <input type="file" name="file" onChange={changeHandler} />
        <button className="primaryyy buttonnn"> Add it</button>
      </form>
    </div>
  );
};

export default FileUpload;
