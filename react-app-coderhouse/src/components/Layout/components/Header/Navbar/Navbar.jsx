import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../../../Context/Context";
import "./Navbar.css";

function Navbar(props) {
  const { pages } = props;
  const { store } = useContext(Context);

  return (
    <div className="navbar__container">
      <ul className="navbar">
        {pages.map(({ id, path, name }) => (
          <li key={`${id}-page`}>
            <NavLink
              to={id}
              className={({ isActive }) => {
                const thereAreOrders =
                  [name.toLowerCase()].includes("cart") && store.orders.length;

                if (isActive) {
                  if (thereAreOrders) {
                    return `${id}-page--current has-orders`;
                  }
                  return `${id}-page--current`;
                }

                return `${id}-page`;
              }}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
