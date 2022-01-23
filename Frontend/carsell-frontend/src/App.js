import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import { addUser, getUsers } from "./Services/UsersService";
import { getAdmins } from "./Services/AdminsService";
import {
  getDeals,
  addDeal,
  checkPosted,
  selectBuyer,
} from "./Services/DealsService";
import Admin from "./Admin";
import User from "./User";
import Register from "./Components/Register";
import Client from "./Client";
import SellHistory from "./Components/SellHistory";
import BuyHistory from "./Components/BuyHistory";
import TheDeals from "./Components/TheDeals";
import Bought from "./Components/Bought";

function App() {
  const [logged, setLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [deals, setDeals] = useState([]);
  const [actualUser, setActualUser] = useState(0);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });

    getAdmins().then((res) => {
      setAdmins(res.data);
    });

    getDeals().then((res) => {
      setDeals(res.data);
    });
  }, []);

  const setTheUser = (id) => {
    setActualUser(id);
  };

  const handleLogged = (id) => {
    setActualUser(id);
    setLogged(!logged);
  };

  const handleRegister = (newUser) => {
    addUser(newUser);
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  users={users}
                  admins={admins}
                  handleLogged={handleLogged}
                />
              }
            />
            {
              <Route
                exact
                path="/admin"
                element={
                  <Admin
                    handleLogged={handleLogged}
                    deals={deals}
                    checkPosted={checkPosted}
                  />
                }
              />
            }
            {
              <Route
                exact
                path="/seller"
                element={
                  <User
                    handleLogged={handleLogged}
                    addDeal={addDeal}
                    actualUser={actualUser}
                  />
                }
              />
            }
            {logged && (
              <Route
                exact
                path="/client"
                element={
                  <Client
                    handleLogged={handleLogged}
                    dealToSearch={getDeals}
                    actualUser={actualUser}
                  />
                }
              />
            )}

            <Route
              path="/seller/sellHistory"
              element={
                <SellHistory
                  actualUser={actualUser}
                  deals={deals}
                  checkPosted={checkPosted}
                  setTheUser={setTheUser}
                />
              }
            />

            <Route
              exact
              path="/client/buyHistory"
              element={<BuyHistory deals={deals} actualUser={actualUser} />}
            />

            <Route
              path="/client/alldeals"
              element={
                <TheDeals
                  deals={deals}
                  checkPosted={checkPosted}
                  actualUser={actualUser}
                  selectBuyer={selectBuyer}
                />
              }
            />

            <Route path="/client/alldeals/bought" element={<Bought />} />

            <Route
              exact
              path="/register"
              element={
                <Register
                  users={users}
                  admins={admins}
                  handleRegister={handleRegister}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
