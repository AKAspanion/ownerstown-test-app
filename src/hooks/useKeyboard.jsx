import { useCallback, useEffect } from "react";
import { useState } from "react";

export default function useKeyboard() {
  const [event, setEvent] = useState(null);

  const escFunction = useCallback((event) => {
    setEvent(event);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return event;
}
