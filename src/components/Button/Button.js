import classNames from "classnames";
import React from "react";
import "./style.scss";

function Button({ onClick, className, children, blue, green, type, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classNames("btn", {
        [className]: className,

        blue: blue,
        green: green,
        disabled: disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
