import React from "react";

function Input(props) {
  const { className, type, placeholder, value, handleOnChange } = props;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required
    />
  );
}

export default Input;
