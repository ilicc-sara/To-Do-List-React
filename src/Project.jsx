import React from "react";
import Button from "./Button";

function Project(props) {
  const { name, id, isActive, setActiveProject, deleteProject } = props;

  return (
    <li
      className={`project-item ${isActive ? "active" : ""} `}
      onClick={() => setActiveProject(id)}
    >
      {name}{" "}
      <button
        className="delete-project-btn"
        onClick={(e) => deleteProject(e, id)}
      >
        X
      </button>
      {/* <Button
        className="delete-project-btn"
        handleClick={(e) => deleteProject(e, id)}
      >
        X
      </Button> */}
    </li>
  );
}

export default Project;
