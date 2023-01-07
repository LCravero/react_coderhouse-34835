import React, { useContext } from "react";
import Context from "../../../../Context/Context";
import Button from "../../../../Button/Button";
import "./CartItem.css";

function CartItem(props) {
  const { order } = props;
  const { dispatch } = useContext(Context);

  const onClickRemoveFromOrderHandler = (id) =>
    dispatch({
      type: "REMOVE-FROM-ORDER",
      payload: {
        id,
      },
    });

  const cartItemStatusClass = order?.buyer ? "cart-item--purchased" : "";

  return (
    <div className={`cart-item-detail__container ${cartItemStatusClass}`}>
      {order.items.map(({ id, title, amount, price }) => (
        <div className="order-item-detail" key={id}>
          <div className="cart-item__id">{id}</div>
          <div className="cart-item__title">{title}</div>
          <div className="cart-item__amount">{amount}</div>
          <div className="cart-item__price">{price}</div>
          {!order?.buyer ? (
            <Button
              label="Remove"
              onClick={() => onClickRemoveFromOrderHandler(id)}
            />
          ) : null}
        </div>
      ))}
      {order?.buyer && (
        <div className="order-buyer-information__container">
          <>
            <div className="buyer-info buyer-name">
              <span>Name:</span>
              <span>{order.buyer.name}</span>
            </div>
            <div className="buyer-info buyer-phone">
              <span>Phone:</span>
              <span>{order.buyer.phone}</span>
            </div>
            <div className="buyer-info buyer-email">
              <span>Name:</span>
              <input type="email" value={order.buyer.email} />
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default CartItem;
