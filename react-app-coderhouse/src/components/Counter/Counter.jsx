import React from "react";
import Button from "../Button/Button";

function Counter(props) {
  const { initialValue, onAdd, onRemove } = props;

  return (
    <>
      <Button label="-" onClick={onRemove} />
      <span>{initialValue}</span>
      <Button label="+" onClick={onAdd} />
    </>
  );
}

export default Counter;
