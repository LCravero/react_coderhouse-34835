function Nav() {
  return (
    <nav className="navigation">
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          direction: "row",
          gap: "1rem",
        }}
      >
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
