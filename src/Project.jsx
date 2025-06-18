import React from "react";

function Project(props) {
  const { inputProject } = props;
  return (
    <li className="project-item">
      {inputProject} <button className="delete-project-btn">X</button>
    </li>
  );
}

export default Project;
