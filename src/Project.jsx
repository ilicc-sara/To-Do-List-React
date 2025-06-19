import React from "react";

function Project(props) {
  const { projectName, id, isActive, setActiveProject } = props;

  return (
    <li
      className={`project-item ${isActive ? "active" : ""} `}
      onClick={() => setActiveProject(id)}
    >
      {projectName} <button className="delete-project-btn">X</button>
    </li>
  );
}

export default Project;
