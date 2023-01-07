import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import Button from "../../Button/Button";
import Context from "../../Context/Context";
import CartItem from "./components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { store, dispatch } = useContext(Context);
  const { orders } = store;
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const customerFormRef = useRef(undefined);
  const phoneFormRef = useRef(undefined);
  const emailFormRef = useRef(undefined);

  const noOrders = orders.length === 0;

  if (noOrders) return <span>No orders yet</span>;

  const lastOrder = orders[orders.length - 1];

  const onClickGoHomeHandler = () => navigate("/");

  const addOrderToOrdersCollection = ({ buyer }) => {
    let currentOrder = store.orders[store.orders.length - 1];

    currentOrder = Object.assign(currentOrder, { buyer });

    const ordersCollectionRef = collection(db, "orders");

    addDoc(ordersCollectionRef, currentOrder).then(({ id }) =>
      console.log("Orden guardada!", id)
    );
  };

  const onClickPurchaseOrderHandler = (event) => {
    event.preventDefault();
    const customer = customerFormRef.current.value;
    const customerPhone = phoneFormRef.current.value;
    const customerEmail = emailFormRef.current.value;

    if (!customer) {
      return setError("Your order should have a customer");
    }

    if (!customerPhone) {
      return setError("Your have to indicate some phone number to contact you");
    }

    if (!customerEmail) {
      return setError("Your have to indicate some email");
    }

    customerFormRef.current.value = "";
    phoneFormRef.current.value = "";
    emailFormRef.current.value = "";

    dispatch({
      type: "PURCHASE-ORDER",
      payload: {
        name: customer,
        phone: customerPhone,
        email: customerEmail,
      },
    });

    const customerData = {
      name: customer,
      phone: customerPhone,
      email: customerEmail,
    };

    addOrderToOrdersCollection({ buyer: customerData });

    setError("");
  };

  return (
    <div className="cart__container">
      <Button label="Go Home" onClick={onClickGoHomeHandler} />
      <form
        onSubmit={onClickPurchaseOrderHandler}
        className="customer-order-data__form"
      >
        <div className="customer-order-data">
          <label htmlFor="customer">Name</label>
          <input
            name="customer"
            type="text"
            placeholder="Your Name"
            ref={customerFormRef}
          />
        </div>
        <div className="customer-order-data">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="Your Phone"
            ref={phoneFormRef}
          />
        </div>
        <div className="customer-order-data">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            ref={emailFormRef}
          />
        </div>
      </form>
      {error && (
        <div className="error-message__container">
          <span className="error-message">{error}</span>
        </div>
      )}

      <div className="order-items__container">
        <div className="items-header">
          <span>
            <strong>ID</strong>
          </span>
          <span>
            <strong>Title</strong>
          </span>
          <span>
            <strong>Amount</strong>
          </span>
          <span>
            <strong>Unit Price</strong>
          </span>
        </div>
        <div className="items-description">
          <CartItem order={lastOrder} />
        </div>
      </div>
      <div className="order-total">
        <span>TOTAL:</span>
        <span>{lastOrder.total}</span>
      </div>
      <Button
        label="Purchase Order"
        onClick={onClickPurchaseOrderHandler}
        type="submit"
        disabled={Boolean(lastOrder.buyer)}
      />
    </div>
  );
}

export default Cart;
