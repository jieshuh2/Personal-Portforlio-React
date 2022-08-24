import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Description: </b>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectDisplay;