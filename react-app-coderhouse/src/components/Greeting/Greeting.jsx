import { useState } from "react";
import SaludoView from "./SaludoView";
import "../styles.css";

export default function Greeting() {
  const [person, setPerson] = useState("...");

  console.log("Este es un render del componente! con estado: ", person);

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
