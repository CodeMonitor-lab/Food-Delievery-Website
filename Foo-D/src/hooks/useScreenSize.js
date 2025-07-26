import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const getSizeCategory = () => {
    const width = window.innerWidth;

    if (width < 576) return "extraSmallScreen";     
    if (width < 676) return "smallScreen";          
    if (width < 768) return "mediumScreen";         
    if (width < 992) return "largeScreen";     
    return "largeScreen";                           
  };

  const [screenSize, setScreenSize] = useState(getSizeCategory());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSizeCategory());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
