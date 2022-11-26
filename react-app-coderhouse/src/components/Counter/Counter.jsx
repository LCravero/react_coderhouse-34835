import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  const onClickReduceConunterHandler = () => {
    console.log("Voy a restar uno a tu contador!");
    setContador(contador - 1);
  };

  const onClickAddConunterHandler = () => {
    console.log("Voy a sumar uno a tu contador!");
    setContador(contador + 1);
  };

  return (
    <div className="contador__container">
      <button
        onClick={
          onClickReduceConunterHandler
          /* () => {
          console.log("Voy a restar uno a tu contador!");
          setContador(contador - 1);
        } */
        }
      >
        -
      </button>
      <span>{contador}</span>
      <button onClick={onClickAddConunterHandler}>+</button>
    </div>
  );
}
