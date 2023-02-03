import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Info() {
  const history = useHistory();
  const dispatch = useDispatch();
  const total = useSelector((store) => store.order);

  function onSubmit(event) {
    event.preventDefault();
    console.log(event);

    let type;
    if (event.target[4].checked) {
      type = event.target[4].value;
    } else {
      type = event.target[5].value;
    }
    dispatch({
      type: "ADD_CUSTOMER",
      payload: {
        customer_name: event.target[0].value,
        street_address: event.target[1].value,
        city: event.target[2].value,
        zip: event.target[3].value,

        // fix radio button !!!!
        type: type,
      },
    });

    history.push('/checkout')
  }

  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Customer Information</h1>
        <p>${total}</p>
      </header>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name"></input>
        <br />
        <input type="text" placeholder="Street Address"></input>
        <br />
        <input type="text" placeholder="City"></input>
        <br />
        <input type="number" placeholder="Zip"></input>
        <br />

        <input type="radio" name="p" value="Pickup"></input>
        <label>Pickup</label>
        <input type="radio" name="p" value="Delivery"></input>
        <label>Delivery</label>
        <br />

        <button type="submit"> Next </button>
      </form>
    </>
  );
}

export default Info;
