import React from "react";
import FileUpload from "./Components/FileUpload";
import Footer from "./Components/Footer";
import HeaderUser from "./Components/HeaderUser";

const User = ({ handleLogged, addDeal, actualUser }) => {
  return (
    <div>
      <HeaderUser />
      <FileUpload addDeal={addDeal} actual_seller_id={actualUser} />
      <Footer handleLogged={handleLogged} />
    </div>
  );
};

export default User;
