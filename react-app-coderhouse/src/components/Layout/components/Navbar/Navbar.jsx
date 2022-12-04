import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const { pages } = props;

  return (
    <nav className="navbar side-bar">
      <ul className="sidebar__list-items">
        {pages.map((page) => (
          <li key={`${page.id}-page`}>
            <NavLink
              to={page.id}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
