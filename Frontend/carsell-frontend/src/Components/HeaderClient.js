import React from "react";
import "../Header.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HeaderClient = () => {
  let navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("buyHistory");
  };

  return (
    <div className="header">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
          <a
            href="http://localhost:3000/"
            className="navbar-brand"
            style={{
              backgroundColor: "transparent",
              borderRadius: "17px",
              borderColor: "rgb(21, 21, 24)",
            }}
          >
            <FaHome size={30} />
          </a>
          <button
            className="navbar-brand"
            onClick={handleOnClick}
            style={{
              backgroundColor: "transparent",
              borderRadius: "17px",
              borderColor: "rgb(21, 21, 24)",
            }}
          >
            Buy History
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderClient;
