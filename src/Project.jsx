import React from "react";

function Project(props) {
  const { inputProject } = props;
  return (
    <li className="project-item">
      ${inputProject} <button class="delete-project-btn">X</button>
    </li>
  );
}

export default Project;
