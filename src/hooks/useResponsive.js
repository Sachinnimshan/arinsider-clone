import { useEffect, useState } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    width: undefined,
    mobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const isMobile = currentWidth < 800;
      setState({
        width: window.innerWidth,
        mobile: isMobile,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state.mobile;
};

export default useResponsive;
