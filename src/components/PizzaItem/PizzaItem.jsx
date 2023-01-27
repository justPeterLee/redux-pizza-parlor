import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PizzaItem(props) {

  // checking if pizza is selected 
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();
  
  const currPrice = useSelector(store=> store.order)
  // manipulate the cart total when adding/removing pizza 
  function add(price, id) {
    //let total = props.total + parseFloat(price);
    //props.sendTotal(total);
    console.log(id)
    console.log(price)
    let newTotal = parseFloat(currPrice) + parseFloat(price);
    console.log(newTotal)
    dispatch({type:'SET_ORDER', payload: newTotal})
    dispatch({type:'ADD_PIZZA_ORDER', payload: {id: id, quantity: 1}})
  }

  function sub(price, id) {
    // let total = props.total - parseFloat(price);
    // props.sendTotal(total);

    let newTotal = parseFloat(currPrice) - parseFloat(price);
    console.log(newTotal)
    dispatch({type:'SET_ORDER', payload: newTotal})
    dispatch({type:'REMOVE_PIZZA_ORDER', payload: {id: id, quantity: 1}})
  }
  return (
    <>
      {status ? (
        <div>
          <img src={props.image_path} />
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <h5>{props.price}</h5>
          <button
            onClick={() => {
              setStatus(false);
              add(props.price, props.id);
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div>
          <img src={props.image_path} />
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <h5>{props.price}</h5>
          <button
            onClick={() => {
              setStatus(true);
              sub(props.price, props.id);
            }}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
}

export default PizzaItem;
