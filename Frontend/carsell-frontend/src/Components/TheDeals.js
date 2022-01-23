import "../Table.css";
import { FaBitcoin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TheDeals = ({ deals, checkPosted, actualUser, selectBuyer }) => {
  let navigate = useNavigate();
  const handleBuy = (id) => {
    checkPosted(id, 2);
    selectBuyer(id, actualUser);
    navigate("bought");
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "25%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: "black",
      }}
      className="card col-md-6 offset-md-3 offset-md-3"
    >
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="img">Photo</th>
            <th scope="col">C.C</th>
            <th scope="col">Fuel</th>
            <th scope="col">HP</th>
            <th scope="col">Price</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) =>
            deal.posted === 1 ? (
              <tr key={deal.id}>
                <td>
                  <img
                    src={require(`./${deal.picture}`)}
                    alt=""
                    style={{ border: 3, height: 200, width: 300 }}
                  />
                </td>
                <td>{deal.cc}</td>
                <td>
                  {deal.fuel}{" "}
                  <h3>
                    <FaBitcoin
                      size={100}
                      style={{ paddingTop: 40, color: "green" }}
                      onClick={() => handleBuy(deal.id)}
                    />
                  </h3>
                </td>
                <td>{deal.hp}</td>
                <td>{deal.price}</td>
                <td>{deal.year}</td>
              </tr>
            ) : (
              <tr></tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TheDeals;
