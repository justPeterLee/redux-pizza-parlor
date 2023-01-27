import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PizzaItem from "../PizzaItem/PizzaItem";

function SelectPizza(props) {
  const history = useHistory();
  // total 
  const [totalPrice, setTotalPrice] = useState(0.0);

  // set total
  function totalHandler(newTotal){
    setTotalPrice(newTotal)
  }
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
        <h3>Total: ${totalPrice}</h3>
      </header>
      {props.pizzaData.map((item) => {
        return (
          <PizzaItem
            key={item.id}
            id={item.id}
            image_path={item.image_path}
            name={item.name}
            description={item.description}
            price={item.price}

            total={totalPrice}

            // getting total prop
            sendTotal={totalHandler}
          />
        );
      })}
      <button onClick={() => history.push('/info')}>Next</button>
    </div>
  );
}

export default SelectPizza;
