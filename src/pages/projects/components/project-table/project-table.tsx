import { Link } from "react-router-dom";
import { Project } from "../../../../api";
import "./project-table.scss";
import { Fragment } from "react";

export const ProjectTable = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="project-table">
      <div className="project-header-item">Name</div>
      <div className="project-header-item">Description</div>
      <div className="project-header-item">Changes</div>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <div className="project-table-item">
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </div>
          <div className="project-table-item">{project.description}</div>
          <div
            style={{
              textAlign: "center",
            }}
            className="project-table-item"
          >
            {0}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
