//dependency
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

// components & styling
import SelectPizza from "../SelectPizza/SelectPizza";
import Info from "../Info/Info";
import "./App.css";



function App() {
  const [pizzaList, setPizzaList] = useState([]);

  // GET request (pizza menu)
  const fetchPizza = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log(response.data);

        setPizzaList(response.data);
      })
      .catch((error) => {
        console.log("error with GET request, ", error);
      });
  };

  // fetch data on page load
  useEffect(() => {
    fetchPizza();
  }, []);


  return (
    <Router>
      <Route path="/" exact>
        <SelectPizza pizzaData={pizzaList} />
      </Route>

      <Route path='/info'>
        <Info />
      </Route>
    </Router>
  );
}

export default App;
