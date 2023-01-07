import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar/Navbar";
import { PAGES } from "../../utils/pages/main-pages";
import "./Layout.css";

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout__container">
      <Header>
        <Navbar pages={PAGES} />
      </Header>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
