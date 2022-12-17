import { useContext } from "react";
import Context from "../Context/Context";

export default function CounterDisplay() {
  const { store } = useContext(Context);
  return (
    <div className="counter-display__cotainer">
      {
        // TODO: implement counter show
        store.products.map((product) => {
          const { id, product: name, amount, price } = product;

          return (
            <span key={id} className="product-legend">
              Product {name} costs {price} ARS. Its stock, currently is {amount}{" "}
              items
            </span>
          );
        })
      }
    </div>
  );
}
