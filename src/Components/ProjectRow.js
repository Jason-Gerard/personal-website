import React from "react";

import ProjectCard from "./ProjectCard";
import projectData from "../project-data.json";

const ProjectRow = () => {
  return (
    <div className="row">
      {projectData.map((project, i) => {
        return (
          <div className="col-md-4" key={i}>
            <ProjectCard
              name={project.name}
              desc={project.desc}
              img={project.img}
              link={project.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectRow;
