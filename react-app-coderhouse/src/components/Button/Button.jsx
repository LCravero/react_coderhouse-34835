import "./Button.css";

function Button(props) {
  const { label: elNombreDeMiBoton } = props;
  /* const buttonStyles = {
    padding: "1rem",
    backgroundColor: "yellow",
  }; */

  return (
    <button className="mi-boton" /* style={buttonStyles} */>
      {elNombreDeMiBoton}
    </button>
  );
}

export default Button;
