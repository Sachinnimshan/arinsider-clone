import { useEffect, useState } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isMobile: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isMobile = currentWindowWidth < 768;
      setState({ windowWidth: currentWindowWidth, isMobile });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

  return state.isMobile;
};

export default useResponsive;
