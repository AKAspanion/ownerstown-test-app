import React, { useState, useEffect, Fragment } from "react";

import Icon from "@mdi/react";
import {
  mdiSend,
  mdiMinus,
  mdiPhoneCancel,
  mdiPhoneHangup,
  mdiKeyboardSpace,
} from "@mdi/js";

import { Button, Calling, Hero, Phone } from "../../components";
import { useHeroFetch, useKeyboard } from "../../hooks";
import "./MainPage.css";

function MainPage() {
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
    <Fragment>
      <Phone
        message={
          <Fragment>
            {loading && <Calling />}
            {!loading && <Hero name={message} />}
            {!loading && <div>{message}</div>}
          </Fragment>
        }
        field={<input type="text" readOnly value={input} />}
        buttons={bindings.map((binding, index) => (
          <Button key={index} {...binding} />
        ))}
        actionButtons={
          <Fragment>
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
                    style={{
                      transform: "rotate(135deg)",
                      marginBottom: "4px",
                    }}
                    path={mdiPhoneCancel}
                    size={0.7}
                  />
                }
              />
            </div>
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default MainPage;
