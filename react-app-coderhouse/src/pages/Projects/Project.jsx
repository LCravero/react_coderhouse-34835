import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";
import "./Project.css";

export default function Project(props) {
  const [projectData, setProjectData] = useState(null);
  const { project } = useParams();

  useEffect(() => {
    getProject(project).then((projectData) => {
      console.log(projectData);
      setProjectData(projectData);
    });
  }, [project]);

  return (
    <>
      {projectData ? (
        <div className="project__container">
          <div className="project-name">{projectData.name}</div>
          <div className="project-detail">{projectData.detail}</div>
          <div className="project-link">
            <a href={projectData.repo.link}>{projectData.repo.link}</a>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
