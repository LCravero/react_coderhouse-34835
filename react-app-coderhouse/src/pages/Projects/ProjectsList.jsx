import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProjects } from "../../services/index";
import { isEmpty } from "../../utils/array";
import "./ProjectsList.css";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // TODO: Make fake API call to get projects
    getAllProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <div className="projects-list__container" area="content">
      {isEmpty(projects) ? (
        <p className="loader">Loading projects...</p>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <Card key={project.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `project-${project.name}` : "project"
                }
                to={`/about/projects/${project.id}`}
              >
                {project.name}
              </NavLink>
              <div className="project-tech-list">
                {project.technologies.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
      <div className="project-detail">
        <Outlet />
      </div>
    </div>
  );
}
