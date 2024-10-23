import { useState } from "react";
import "./App.css";
function App() {
  const [shoppingList, setshoppingList] = useState([]);
  const Additem = (event) => {
    event.preventDefault();
    let inputForm = event.target;
    let formData = new FormData(inputForm);
    let data_object = Object.fromEntries(formData.entries());
    data_object.purchased = false;
    setshoppingList([...shoppingList, data_object]);
    inputForm.value=""
  };
  const mark_done = (event) => {
    let mark = event.target.value;
    shoppingList.map((item, index) => {
      if (mark === item.name) {
        value.purchased = true;
      }
    });
    setshoppingList([...shoppingList]);
  };
  const removeitem = (event) => {
    let removed = event.target.value;
    let newList = shoppingList.filter((item) => {
      if (removed === item.name) {
        return false;
      } else {
        return true;
      }
    });
    setshoppingList(newList);
  };
  return (
    <>
      <h1 className="h1">Shopping Manager List</h1>
      <div className="cart">
        <form onSubmit={Additem}>
          <input type="text" placeholder="Enter item name" name="name" />
          <button className="add_item" type="submit">
            Add
          </button>
        </form>
      </div>
      {shoppingList.map((value, index) => {
        return (
          <div className={value.purchased ? "card green" : "card"} key={index}>
            <span>{value.name}</span>
            <span>
              <button value={value.name} onClick={mark_done}>
                Done
              </button>
              &nbsp;
              <button onClick={removeitem} value={value.name}>
                X
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default App;
