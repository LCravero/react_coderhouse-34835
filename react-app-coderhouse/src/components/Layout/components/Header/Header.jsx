import React from "react";
import "./Header.css";

function Header(props) {
  const { children } = props;

  return <div className="header__container">{children}</div>;
}

export default Header;
