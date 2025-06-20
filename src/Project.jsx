import React from "react";
import Button from "./Button";

function Project(props) {
  const { name, id, isActive, setActiveProject, deleteProject } = props;

  return (
    <li
      className={`project-item ${isActive ? "active" : ""} `}
      onClick={() => setActiveProject(id)}
    >
      {name}
      <Button
        variation="deleteProject"
        handleClick={(e) => deleteProject(e, id)}
      >
        X
      </Button>
    </li>
  );
}

export default Project;
