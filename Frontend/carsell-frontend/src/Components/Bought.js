import React from "react";
import { FaCheckDouble, FaHome } from "react-icons/fa";
import "../Header.css";

const Bought = () => {
  return (
    <div>
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
          </nav>
        </header>
      </div>

      <h1
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FaCheckDouble size={300} style={{ color: "green" }} />{" "}
      </h1>
    </div>
  );
};

export default Bought;
