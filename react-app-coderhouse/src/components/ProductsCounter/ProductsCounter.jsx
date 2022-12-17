import { useContext } from "react";
import Context from "../Context/Context";

export default function ProductsCounter() {
  const { store, dispatch } = useContext(Context);
  const { products } = store;

  const onRemoveClickHandler = (productId) => {
    dispatch({
      type: "remove-item",
      payload: {
        id: productId,
      },
    });
  };

  const onAddClickHandler = (productId) => {
    dispatch({
      type: "add-item",
      payload: {
        id: productId,
      },
    });
  };

  return (
    <>
      {products.map((product, index) => (
        <div key={product.id} className="product__container">
          <button
            className="remove-item"
            onClick={() => onRemoveClickHandler(product.id)}
          >
            -
          </button>
          {product.product} - {product.amount}
          <button
            className="add-item"
            onClick={() => onAddClickHandler(product.id)}
          >
            +
          </button>
        </div>
      ))}
    </>
  );
}
