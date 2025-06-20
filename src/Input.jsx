import React from "react";

function Input(props) {
  const { variation, type, children, value, handleOnChange } = props;

  return (
    <input
      className={`input-${variation}`}
      type={`${type ? type : "text"}`}
      placeholder={children}
      value={value}
      onChange={handleOnChange}
      required
    />
  );
}

export default Input;
