import { useRef, useEffect } from "react";

const useClick = onClick => {
  if (!typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    } // when component mounts
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }; // when component unmounts!
  }, []); // if [] isn't there, eventListener will be added on every update
  return element;
};

export default useClick;
