import React from "react";

function Input(props) {
  const { variation, type, children, value, handleOnChange } = props;

  let baseClassName;

  if (variation === "project-name") {
    baseClassName = "input-project-name";
  }
  if (variation === "to-do-name") {
    baseClassName = "input-to-do-name";
  }

  if (variation === "to-do-date") {
    baseClassName = "input-to-do-date";
  }
  if (variation === "checkbox") {
    baseClassName = "check";
  }

  return (
    <input
      className={`${baseClassName}`}
      type={`${type ? type : "text"}`}
      placeholder={children}
      value={value}
      onChange={handleOnChange}
      required
    />
  );
}

export default Input;
