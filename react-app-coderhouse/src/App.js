import "./App.css";
import ProductsCounter from "./components/ProductsCounter/ProductsCounter";
import CounterDisplay from "./components/CounterDisplay/CounterDisplay";
import Provider from "./components/Provider/Provider";

function App() {
  return (
    <div className="app">
      <Provider>
        <CounterDisplay />
        <ProductsCounter />
      </Provider>
    </div>
  );
}

export default App;
