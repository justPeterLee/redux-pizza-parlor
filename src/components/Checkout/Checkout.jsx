import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Checkout() {
  const history = useHistory();
  const customerInfo = useSelector((store) => store.addCustomer);
  const pizzaOrder = useSelector((store) => store.pizzaOrder);
  const total = useSelector((store) => store.order);

  const checkoutHandler = () => {
    console.log("checked out");
    axios
      .post("/api/order", {
        customer_name: customerInfo.customer_name,
        street_address: customerInfo.street_address,
        city: customerInfo.city,
        zip: customerInfo.zip,
        type: customerInfo.type,
        total: total,
        pizzas: pizzaOrder,
      })
      .then((response) => {
        console.log("order sent");
      })
      .catch((error) => {
        console.log("error with POST request, ", error);
      });

    
    history.push("/");
    window.location.reload(true);
  };
  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Checkout</h1>
      </header>
      <div className="customer-info">
        <p>{customerInfo.customer_name}</p>
        <p>{customerInfo.street_address}</p>
        <p>state</p>

        <p>{customerInfo.type}</p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {pizzaOrder.map((pizza) => {
            return (
              <>
                <tr key={Math.random()}>
                  <td>{pizza.name}</td>
                  <td>${pizza.cost}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <div className="total">
        <p>${total}</p>
      </div>

      <button onClick={checkoutHandler}>checkout</button>
    </>
  );
}

export default Checkout;
