const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = ""; // Chrome thing?
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
