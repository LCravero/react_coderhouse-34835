import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithNotFound from "./components/routing/RoutesWithNotFound/RoutesWithNotFound";
import Layout from "./components/Layout/Layout";
import Provider from "./components/Provider/Provider";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import DrumBrand from "./components/pages/DrumBrand/DrumBrand";
import Drum from "./components/Drum/Drum";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider>
        <Router>
          <Layout>
            <RoutesWithNotFound path="*">
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="cart" element={<Cart />} />

              <Route
                path="solidrums"
                element={<DrumBrand brand="solidrums" />}
              />
              <Route path="solidrums/:drumId" element={<Drum />} />

              <Route path="mapex" element={<DrumBrand brand="mapex" />} />
              <Route path="mapex/:drumId" element={<Drum />} />

              <Route path="tama" element={<DrumBrand brand="tama" />} />
              <Route path="tama/:drumId" element={<Drum />} />
            </RoutesWithNotFound>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
