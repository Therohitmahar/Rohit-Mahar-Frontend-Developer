import React, { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();
export default function Context({ children }) {
  useEffect(() => {
    setIsLoading(true);
    fetchCapsuleData();
    fetchCoresData().then(() => {
      setIsLoading(false);
    });
  }, []);
  const value = { capsuleData, coresData };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export function useData() {
  return useContext(appContext);
}
