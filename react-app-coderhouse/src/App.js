import "./App.css";
import Button from "./Button/Button";

function App() {
  const onClickPlayHandler = (event) => {
    event.stopPropagation();
    alert("Poniendo play...");
  };
  const onClickStopHandler = (event) => {
    event.stopPropagation();
    alert("Stoppeando ejecución..");
  };
  const onClickButtonsToolbarHandler = () => alert("Usando buttons toolbar");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Enviando informacion");
  };

  const onClickButtonHandler = () =>
    alert("Soy un handler que viene desde el parent component");

  const onChangeHandler = () =>
    alert("Soy un input handler que viene desde el parent component");

  return (
    <div className="app__container">
      <div
        className="buttons__container"
        onClick={onClickButtonsToolbarHandler}
      >
        <button className="action-button" onClick={onClickPlayHandler}>
          Play
        </button>
        <button className="action-button" onClick={onClickStopHandler}>
          Stop
        </button>
      </div>

      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Colocar nombre" />
        <button>Sumbit</button>
      </form>

      <Button onClick={onClickButtonHandler} onChange={onChangeHandler} />
    </div>
  );
}

export default App;
