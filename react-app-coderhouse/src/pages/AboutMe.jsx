import { Link, Outlet } from "react-router-dom";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me__container" area="content">
      <div className="title">About Me</div>
      <div className="links">
        <Link to="me">Me</Link>
        <Link to="projects">Projects</Link>
      </div>
      <Outlet />
    </div>
  );
}
