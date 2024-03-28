import { Link } from "react-router-dom";
import { Project } from "../../../../api";
import "./project-grid.scss";
import { Fragment } from "react";

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="project-grid">
      <div className="project-header-item">Name</div>
      <div className="project-header-item">Description</div>
      <div className="project-header-item">Changes</div>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <div className="project-grid-item">
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </div>
          <div className="project-grid-item">{project.description}</div>
          <div
            style={{
              textAlign: "center",
            }}
            className="project-grid-item"
          >
            {0}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
