import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";

export default function Project(props) {
  const [projectData, setProjectData] = useState(null);
  const { project } = useParams();

  useEffect(() => {
    getProject(project).then((projectData) => {
      console.log(projectData);
      setProjectData(projectData);
    });
  }, []);

  return (
    <>
      {projectData ? (
        <div className="project__container">
          <div className="project-name">{projectData.name}</div>
          <div className="project-detail">{projectData.detail}</div>
          <div className="project-name">
            <a href={projectData.repo.link}>{projectData.repo.Name}</a>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
