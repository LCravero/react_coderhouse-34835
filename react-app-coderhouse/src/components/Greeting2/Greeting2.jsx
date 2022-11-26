import { useState, useEffect } from "react";
import SaludoView from "../Greeting/SaludoView";
import "../styles.css";

export default function Greeting2() {
  const [person, setPerson] = useState("");
  const [cambio, setCambio] = useState("...");

  console.log("Este es un render del componente! con estado: ", person);

  useEffect(() => {
    console.log("El componente ya fue montado!");
    setPerson("Lucas");
  }, []);

  useEffect(() => {
    console.log("Ey! Se cambió el valor de el estado 'cambio'");
  }, [cambio]);

  const onChangeHandler = (event) => {
    const name = event.target.value;
    setPerson(name);
  };

  return (
    <div className="greeting__container">
      <SaludoView personName={person} />
      <input
        className="person-input"
        type="text"
        onChange={onChangeHandler}
        // onChange={(event) => setPerson(event.target.value)}
        placeholder="Enter the person name who wants to greet"
      />
    </div>
  );
}
