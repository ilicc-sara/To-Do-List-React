import React from "react";

function Project(props) {
  const { projectName, id } = props;
  return (
    <li className="project-item">
      {projectName} <button className="delete-project-btn">X</button>
    </li>
  );
}

export default Project;
