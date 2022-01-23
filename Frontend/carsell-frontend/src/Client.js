import React from "react";
import Footer from "./Components/Footer";
import HeaderClient from "./Components/HeaderClient";
import FileSeach from "./Components/FileSeach";

const Client = ({ handleLogged, dealToSearch, actualUser }) => {
  return (
    <div>
      <HeaderClient />
      <FileSeach dealToSearch={dealToSearch} actualUser={actualUser} />
      <Footer handleLogged={handleLogged} />
    </div>
  );
};

export default Client;
