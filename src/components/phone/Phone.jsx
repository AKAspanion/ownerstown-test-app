import React from "react";

import "./Phone.css";

function Phone({ message, field, buttons, actionButtons }) {
  const time = new Date().toTimeString().slice(0, 5);

  return (
    <div className="feature-phone__wrapper">
      <div className="feature-phone__screen">
        <div className="feature-phone__background" />
        <div className="feature-phone__time">{time}</div>
        <div className="feature-phone__battery" />
        <div className="feature-phone__display">
          <div className="feature-phone__message">{message}</div>
          {field}
          <div className="feature-phone__help">
            <div className="feature-phone__help-left">Send</div>
            <div className="feature-phone__help-right">Clear</div>
          </div>
        </div>
        <div className="feature-phone__grill" />
      </div>

      <div className="feature-phone__buttons-wrapper">
        <div className="feature-phone__buttons">
          <div className="feature-phone__dummy-buttons">{actionButtons}</div>
          {buttons}
        </div>
      </div>
      <div className="feature-phone__mic-wrapper">
        <div className="feature-phone__mic" />
      </div>
    </div>
  );
}

export default Phone;
