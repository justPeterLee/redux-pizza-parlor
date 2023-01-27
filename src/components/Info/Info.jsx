import { useDispatch } from "react-redux";
function Info() {
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
    dispatch({
      type: "ADD_CUSTOMER",
      payload: {
        customer_name: event.target[0].value,
        street_address: event.target[1].value,
        city: event.target[2].value,
        zip: event.target[3].value,

        // fix radio button !!!!
        type: event.target[4].value,
      },
    });
  }

  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Customer Information</h1>
      </header>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name"></input><br/>
        <input type="text" placeholder="Street Address"></input><br/>
        <input type="text" placeholder="City"></input><br/>
        <input type="number" placeholder="Zip"></input><br/>

        <input type="radio" name="p" value="Pickup"></input>
        <label>Pickup</label>
        <input type="radio" name="p" value="Delivery"></input>
        <label>Delivery</label><br/>

        <button type="submit"> Next </button>
      </form>
    </>
  );
}

export default Info;
