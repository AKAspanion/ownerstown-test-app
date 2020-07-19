import React from "react";
import "./Button.css";

function Button({
  style,
  icon,
  value,
  center,
  binding,
  onClick,
  className,
  valueClass,
}) {
  const handleClick = (e) => {
    if (onClick) onClick(e, value);
  };

  return (
    <div
      tabIndex="0"
      style={style}
      className={`keypad__key ${center ? "keypad__key--center" : ""} ${
        className || ""
      }`}
      onClick={(e) => handleClick(e)}
    >
      {icon}
      {value && (
        <div className={`keypad__key-value ${valueClass || ""}`}>{value}</div>
      )}
      {binding && <div className="keypad__key-binding">{binding}</div>}
      {center && <div className="keypad__key-large"></div>}
    </div>
  );
}

export default Button;
