import "./App.css";
import Button from "./components/Button/Button";
import Box from "./components/Box/Box";
import UsersContainer from "./components/UsersContainer/UsersContainer";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "black", minHeight: "100vh" }}
    >
      <Button label="Haz click aqui" />
      <Box>
        <span style={{ color: "white" }}>Esto es un elemento hijo</span>
      </Box>
      <UsersContainer />
    </div>
  );
}

export default App;
