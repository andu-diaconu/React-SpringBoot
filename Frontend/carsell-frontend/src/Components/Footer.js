import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "../Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = ({ handleLogged }) => {
  let navigate = useNavigate();

  const handleSingOut = (e) => {
    e.preventDefault();
    handleLogged(0);
    navigate("/");
  };

  return (
    <footer className="footer">
      <span>
        <FaSignOutAlt
          style={{ color: "red" }}
          size={50}
          onClick={handleSingOut}
        />
      </span>
    </footer>
  );
};

export default Footer;
