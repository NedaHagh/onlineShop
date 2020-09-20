import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginContext from "../context/loginContext";
import NoImage from "../assets/images/noPicture.jpg";
import LoadingComponent from "./LoadingComponent";
import ProductFeatures from "./ProductFeatures";
import LoginContext from "../context/loginContext";
import { MdAdd, MdRemove } from "react-icons/md";

export default function CheckItems() {
  const { handleBascketItems, bascketItems } = useContext(LoginContext);
  const [newBascketItems, setNewBascketItems] = useState(bascketItems);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    handleBascketItems(newBascketItems);
    let total = 0;
    newBascketItems.map((item) => (total += item.price * item.number));
    setTotalPrice(total);
  }, [newBascketItems]);
  const sendItemToBackend = async(id,quantity)=>{
    try{
      const result = await fetch(
        "http://5.9.249.45:8000/finance/MyShoppingCart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ item: id, quantity: quantity }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const addToBascketItems = (itemToAdd) => {
    sendItemToBackend(itemToAdd,1);
    let newBascketItems = bascketItems.map((item) =>
      item.id === itemToAdd ? { ...item, number: item.number + 1 } : item
    );
    setNewBascketItems(newBascketItems);
  };
  const removeFromBascketItems = (itemToRemove) => {
    sendItemToBackend(itemToRemove,-1);
    let newItems;
    let selectedItem = bascketItems.find((item) => (
      item.id === itemToRemove
    ));
    if (selectedItem.number > 1) {
       newItems = bascketItems.map((item) => (
        item.id === itemToRemove ? { ...item, number: item.number - 1 } : item
      ));
    } else {
     newItems = bascketItems.filter((item) => item.id != itemToRemove);  
    }
    setNewBascketItems(newItems);
  };

  return (
    <div className="checkItemContent">
      {bascketItems ? (
        bascketItems.map((item) => (
          <div key={item.id}>
            <div className="checkitem">
              <div>
                <img src={item.image ? item.image : NoImage} />
              </div>
              <div>
                <p>
                  <span>name:</span> {item.name}
                </p>
                <p>
                  <span>brand:</span> {item.brand}
                </p>
                <p>
                  <span>description:</span> {item.description}
                </p>
                <div className="cart-price-row">
                  <div className="quantity-selector">
                    <MdAdd
                      className="quantity-selector-add"
                      onClick={() => addToBascketItems(item.id)}
                    />
                    <div className="show-number">{item.number}</div>
                    <MdRemove
                      className="quantity-selector-remove"
                      onClick={() => removeFromBascketItems(item.id)}
                    />
                  </div>
                  <div className="price-selector">
                    <span>Price: </span>
                    {item.number * item.price}$
                    <span className="invisibleTag"></span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div>سبد خرید شما خالی است!</div>
      )}
      <div className="TotalPrice">
        <button className="continueButton">Continue the buying process</button>
        <div>
          <span>Total price:</span>
          <span>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
}
