import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import "./ItemCard.css";

function ItemCard(props) {
  const { data, type = "default", path } = props;
  const {
    aros,
    id,
    marca,
    modelo,
    precio,
    stock: drumStock,
    terminacion,
    torres,
  } = data;

  const { dispatch } = useContext(Context);
  const [stock, setStock] = useState(drumStock);
  const [itemsToCart, setItemsToCart] = useState(0);
  const navigate = useNavigate();

  const onClickHandler = () => navigate(path);

  const onAdd = () => {
    if (itemsToCart < drumStock && drumStock !== 0) {
      setItemsToCart(itemsToCart + 1);
      setStock(stock - 1);
    }
  };

  const onRemove = () => {
    if (itemsToCart > 0) {
      setItemsToCart(itemsToCart - 1);
      setStock(stock + 1);
    }
  };

  const onClickAddToCartHandler = () => {
    console.log({
      id,
      modelo,
      marca,
      precio,
      cantidad: itemsToCart,
      total: itemsToCart * precio,
    });

    dispatch({
      type: "ADD-TO-CART",
      payload: {
        id,
        title: modelo,
        amount: itemsToCart,
        price: precio,
      },
    });
  };

  if (type === "default") {
    return (
      <div className="item-card__container" onClick={onClickHandler}>
        <div className="drum-image" />
        <div className="drum-details__container">
          <h2 className={`link-to__${modelo}`} onClick={onClickHandler}>
            {modelo}
          </h2>
          <h4>{marca}</h4>
        </div>
        <div className="price">
          <div className="price-value">USD {precio}</div>
        </div>
      </div>
    );
  }

  if (type === "detail") {
    const entriesFromTorres = Object.entries(torres);

    return (
      <div className="item-card__container detail">
        <div className="drum-image" />
        <div className="drum-details__container">
          <div className="details__header">
            <h2>{modelo}</h2>
            <h4>{marca}</h4>
          </div>
          <div className="other-detail__container">
            <span>Aros</span>
            <span>{aros}</span>
          </div>
          <div className="other-detail__container">
            <span>Terminación</span>
            <span>{terminacion}</span>
          </div>
          <div className="other-detail__container">
            <span>Torres</span>
            <div className="torres__detail">
              {entriesFromTorres.map((item) => {
                const [name, value] = item;

                return (
                  <div className="detail" key={name}>
                    <span>{name} :</span>
                    <span>
                      <strong>{value}</strong>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="price">
          <span>Precio</span>
          <div className="price-value">USD {precio}</div>
        </div>
        <div className="stock">
          <span>Stock</span>
          <span>{stock}</span>
        </div>
        <div className="items-to-cart">
          <Counter
            initialValue={itemsToCart}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
        <div className="add-to-cart__btn">
          <Button
            label="Add to Cart"
            onClick={onClickAddToCartHandler}
            disabled={itemsToCart === 0}
          />
        </div>
      </div>
    );
  }

  return null;
}

export default ItemCard;
