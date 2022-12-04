import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { PAGES } from "../../utils/main-pages";
import "./Layout.css";

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout__container">
      <Navbar pages={PAGES} />
      {children}
      <Footer area="footer" />
    </div>
  );
}
