import { useRef } from "react";

const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); // 브라우저에 따라 compatibility issue 있을 수 있음
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default useFullscreen;
