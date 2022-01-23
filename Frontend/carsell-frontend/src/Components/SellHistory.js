import "../Table.css";
import { FaTimes, FaHome } from "react-icons/fa";

const SellHistory = ({ actualUser, deals, checkPosted }) => {
  const handleCheckPosted = (id, posted) => {
    checkPosted(id, posted);
    window.location.reload();
  };

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
              deal.posted === 1 && actualUser === deal.actual_seller_id ? (
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
                      <FaTimes
                        size={100}
                        style={{ paddingTop: 40, color: "red" }}
                        onClick={() => handleCheckPosted(deal.id, 3)}
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
    </div>
  );
};

export default SellHistory;
