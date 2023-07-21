import React, { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ deviceWidth }}>
      {children}
    </ScrollContext.Provider>
  );
}

const useGlobalContext = () => {
  return { scrollContext: useContext(ScrollContext) };
};

export { ScrollProvider, useGlobalContext };
