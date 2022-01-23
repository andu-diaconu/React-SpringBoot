import React from "react";
import DealsTable from "./Components/DealsTable";
import Footer from "./Components/Footer";

const Admin = ({ handleLogged, deals, checkPosted }) => {
  return (
    <div>
      <DealsTable deals={deals} checkPosted={checkPosted} />
      <Footer handleLogged={handleLogged} />
    </div>
  );
};

export default Admin;
