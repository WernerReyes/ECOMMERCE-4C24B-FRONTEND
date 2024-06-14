import { useEffect, useState } from "react";
import { responsiveDesign } from "../utilities";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width < responsiveDesign.sm;
  const isTablet =
    windowSize.width < responsiveDesign.md &&
    windowSize.width >= responsiveDesign.sm;
  const isDesktop =
    windowSize.width >= responsiveDesign.md &&
    windowSize.width < responsiveDesign.lg;
  const isLargeDesktop = windowSize.width >= responsiveDesign.lg;
  const isExtraLargeDesktop = windowSize.width >= responsiveDesign.xl;

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isExtraLargeDesktop,
    ...responsiveDesign,
  };
};
