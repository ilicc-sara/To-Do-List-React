import React from "react";

function Button(props) {
  const { type, className, handleClick, children } = props;

  return (
    <button
      type={`${type ? type : "button"}`}
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
