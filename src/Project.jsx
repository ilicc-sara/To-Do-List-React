import React from "react";

function Project(props) {
  const { name, id, isActive, setActiveProject, deleteProject } = props;

  return (
    <li
      className={`project-item ${isActive ? "active" : ""} `}
      onClick={() => setActiveProject(id)}
    >
      {name}{" "}
      <button className="delete-project-btn" onClick={() => deleteProject(id)}>
        X
      </button>
    </li>
  );
}

export default Project;
