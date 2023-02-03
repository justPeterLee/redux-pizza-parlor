import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
function Admin() {
    const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        setOrders(response.data);
        console.log(response.data[0].time);
      })
      .catch((error) => {
        console.log("error with getting customer order (GET), ", error);
      });
  };

  useEffect(() => {fetchOrders()}, []);
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
        {orders.map((order)=>{
            return( 
                <tr key={order.id}>
                    <td>{order.customer_name}</td>
                    <td>{order.time}</td>
                    <td>{order.type}</td>
                    <td>{order.total}</td>
                </tr>
            )
        })}
      </thead>
    </Table>
  )
};

export default Admin;
