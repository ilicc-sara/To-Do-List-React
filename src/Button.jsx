import React from "react";

function Button(props) {
  const { type, variation, handleClick, children } = props;

  let baseClassName;

  if (variation === "addProject") {
    baseClassName = "add-project-btn";
  }
  if (variation === "confirmProject") {
    baseClassName = "confirm-project-btn";
  }
  if (variation === "cancelProject") {
    baseClassName = "cancel-project-btn";
  }
  if (variation === "addToDo") {
    baseClassName = "add-to-do-btn";
  }
  if (variation === "confirmToDo") {
    baseClassName = "confirm-to-do-btn";
  }
  if (variation === "cancelToDo") {
    baseClassName = "cancel-to-do-btn";
  }
  if (variation === "deleteProject") {
    baseClassName = "delete-project-btn";
  }
  if (variation === "editToDo") {
    baseClassName = "edit-to-do-btn";
  }
  if (variation === "deleteToDo") {
    baseClassName = "delete-to-do-btn";
  }
  if (variation === "submitToDo") {
    baseClassName = "submit-to-do-btn";
  }

  return (
    <button
      type={`${type ? type : "button"}`}
      className={`${baseClassName}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
