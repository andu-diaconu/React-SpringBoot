import "../Table.css";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const DealsTable = ({ deals, checkPosted }) => {
  const handleCheckPosted = (id, posted) => {
    checkPosted(id, posted);
    window.location.reload();
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
            deal.posted === 0 ? (
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
                  {deal.fuel}
                  <h3>
                    <FaTimes
                      size={100}
                      style={{ paddingTop: 40, color: "red" }}
                      onClick={() => handleCheckPosted(deal.id, 3)}
                    />
                  </h3>
                </td>
                <td>
                  {deal.hp}
                  <h3>
                    <FaCheckCircle
                      size={100}
                      style={{ paddingTop: 40, color: "green" }}
                      onClick={() => handleCheckPosted(deal.id, 1)}
                    />
                  </h3>
                </td>
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

export default DealsTable;
