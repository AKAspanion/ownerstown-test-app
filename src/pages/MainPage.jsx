import React, { useState, useEffect } from "react";

import Icon from "@mdi/react";
import {
  mdiSend,
  mdiMinus,
  mdiPhoneCancel,
  mdiPhoneHangup,
  mdiKeyboardSpace,
} from "@mdi/js";

import { Button, Calling, Hero } from "../components";
import { useHeroFetch, useKeyboard } from "../hooks";
import "./MainPage.css";

function MainPage() {
  const time = new Date().toTimeString().slice(0, 5);

  const [message, setMesssage] = useState("");
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const { loading, hero, error } = useHeroFetch(code);
  const event = useKeyboard();

  useEffect(() => {
    setMesssage(hero || error);
  }, [error, hero]);

  useEffect(() => {
    if (event) {
      const { key } = event;
      if (key === "Backspace") {
        onClick(event, "back");
      } else if (key === "Escape") {
        onClick(event, "clear");
      } else if (key === " ") {
        onClick(event, "#");
      } else if (key === "Enter") {
        onClick(event, "✱");
      } else {
        onClick(event, key);
      }
    }
  }, [event]);

  const onClick = (e, value) => {
    if (isNaN(value)) {
      switch (value) {
        case "#":
          setInput(input + " ");
          break;
        case "✱":
          if (loading) return;
          if (input) setCode(input);
          break;
        case "clear":
          if (loading) return;
          setCode("");
          setInput("");
          break;
        case "back":
          if (input) setInput(input.slice(0, input.length - 1));
          break;
        default:
          break;
      }
    } else {
      setInput(input + value);
    }
  };

  const bindings = [
    { value: 1, binding: "@.?", onClick },
    { value: 2, binding: "abc", onClick },
    { value: 3, binding: "def", onClick },
    { value: 4, binding: "ghi", onClick },
    { value: 5, binding: "jkl", onClick },
    { value: 6, binding: "mno", onClick },
    { value: 7, binding: "pqrs", onClick },
    { value: 8, binding: "tuv", onClick },
    { value: 9, binding: "wxyz", onClick },
    {
      binding: <Icon path={mdiSend} size={0.5} />,
      className: "send-btn",
      valueClass: "asterix",
      value: "✱",
      onClick,
    },
    { value: "0", binding: "", onClick },
    {
      binding: <Icon path={mdiKeyboardSpace} size={0.6} />,
      value: "#",
      onClick,
    },
  ];
  return (
    <div className="feature-phone__wrapper">
      <div className="feature-phone__screen">
        <div className="feature-phone__background" />
        <div className="feature-phone__time">{time}</div>
        <div className="feature-phone__battery" />
        <div className="feature-phone__display">
          <div className="feature-phone__message">
            {loading && <Calling />}
            {!loading && <Hero name={message} />}
            {!loading && <div>{message}</div>}
          </div>
          <input type="text" readOnly value={input} />
          <div className="feature-phone__help">
            <div className="feature-phone__help-left">Send</div>
            <div className="feature-phone__help-right">Clear</div>
          </div>
        </div>
        <div className="feature-phone__grill" />
      </div>

      <div className="feature-phone__buttons-wrapper">
        <div className="feature-phone__buttons">
          <div className="feature-phone__dummy-buttons">
            <div>
              <Button
                onClick={() => onClick({}, "✱")}
                icon={<Icon size={1.2} path={mdiMinus} />}
              />
              <Button
                style={{ marginTop: "4px" }}
                onClick={() => onClick({}, "✱")}
                icon={
                  <Icon
                    style={{ marginBottom: "4px" }}
                    path={mdiPhoneHangup}
                    size={0.7}
                  />
                }
              />
            </div>
            <Button center />
            <div>
              <Button
                onClick={() => onClick({}, "back")}
                icon={<Icon path={mdiMinus} size={1.2} />}
              />
              <Button
                style={{ marginTop: "4px" }}
                onClick={() => onClick({}, "clear")}
                icon={
                  <Icon
                    style={{ transform: "rotate(135deg)", marginBottom: "4px" }}
                    path={mdiPhoneCancel}
                    size={0.7}
                  />
                }
              />
            </div>
          </div>

          {bindings.map((binding, index) => (
            <Button key={index} {...binding} />
          ))}
        </div>
      </div>
      <div className="feature-phone__mic-wrapper">
        <div className="feature-phone__mic"></div>
      </div>
    </div>
  );
}

export default MainPage;