import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Register.css";
import { FaUserEdit, FaLock, FaMoneyBillAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = ({ users, admins, handleRegister }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [balance, setBalance] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !balance || role === "") {
      alert("ALL FIELDS MUST BE COMPLETED");
      return;
    }

    let found = false;
    users.forEach((element) => {
      if (element.username === username) {
        found = true;
      }
    });

    admins.forEach((element) => {
      if (element.username === username) {
        found = true;
      }
    });

    if (!found) {
      handleRegister({ username, password, balance, role });
      navigate("/");
    } else {
      alert("THIS USERNAME IS ALREADY TAKEN");
      return;
    }
  };

  return (
    <div
      className="Appp"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form className="formm" onSubmit={handleOnSubmit}>
        <div className="input-grouppp">
          <label> Username</label>
          <FaUserEdit size={30} />
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-grouppp">
          <label>Password</label>
          <FaLock size={30} />
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-grouppp">
          <label> Balance </label>
          <FaMoneyBillAlt size={30} />
          <input
            type="text"
            value={balance}
            placeholder="Enter the balance"
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>

        <div className="input-grouppp">
          <label>Role select</label>
          <select onChange={(e) => setRole(e.target.value)}>
            <option></option>
            <option>CLIENT</option>
            <option>SELLER</option>
          </select>
        </div>
        <a href="http://localhost:3000/login">
          <button className="primaryyy buttonnn"> Sign in</button>
        </a>
      </form>
    </div>
  );
};

export default Register;
