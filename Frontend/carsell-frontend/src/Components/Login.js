import React from "react";
import logo from "./loho.png";
import "../Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users, admins, handleLogged }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!user || !pass) {
      alert("Enter the credentials");
      return;
    }

    let found = false;
    users.forEach((element) => {
      if (element.username === user) {
        if (element.password === pass) {
          if (element.role === "SELLER") {
            handleLogged(element.id);
            navigate("seller");
            found = true;
          }
          if (element.role === "CLIENT") {
            handleLogged(element.id);
            navigate("client");
            found = true;
          }
        }
      }
    });

    admins.forEach((element) => {
      if (element.username === user) {
        if (element.password === pass) {
          handleLogged(element.id);
          navigate("admin");
          found = true;
        }
      }
    });

    if (!found) alert("USERNAME OR PASSWORD INCORRECT");

    setUser("");
    setPass("");
  };

  return (
    <div
      className="App"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={logo} className="logo" />
      <form className="formm" onSubmit={handleOnSubmit}>
        <div className="input-groupp">
          <label>Username</label>
          <input
            type="text"
            value={user}
            placeholder="Enter username"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="input-groupp">
          <label>Password</label>
          <input
            type="password"
            value={pass}
            placeholder="Enter password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="primaryy buttonn">Login</button>
      </form>
      <a href="http://localhost:3000/register">
        <button className="secondaryy buttonn">Register</button>
      </a>
    </div>
  );
};

export default Login;
