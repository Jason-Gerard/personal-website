import React from "react";

const ProjectCard = props => {
  return (
    <div className="card mb-4">
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text" style={{ minHeight: "8rem" }}>
          {props.desc}
        </p>
        <a
          href={props.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
