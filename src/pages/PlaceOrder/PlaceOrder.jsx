import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import toast, { Toaster } from "react-hot-toast";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const notifySuccess = () => {
    toast.success("Your order has been placed");
    resetInputFields();
  };
  const notifyError = () =>
    toast.error("Error occurred: Please fill in all fields");

  const handleInputChange = () => {
    const inputs = document.querySelectorAll("input");
    let allFilled = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });
    setAllFieldsFilled(allFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allFieldsFilled) {
      notifySuccess();
    } else {
      notifyError();
    }
  };

  const resetInputFields = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
    setAllFieldsFilled(false);
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        <input type="text" placeholder="Street" onChange={handleInputChange} />
        <div className="multi-fields">
          <input type="text" placeholder="City" onChange={handleInputChange} />
          <input type="text" placeholder="State" onChange={handleInputChange} />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip Code"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Country"
            onChange={handleInputChange}
          />
        </div>
        <input type="text" placeholder="Phone" onChange={handleInputChange} />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
      <Toaster />
    </form>
  );
}

export default PlaceOrder;
