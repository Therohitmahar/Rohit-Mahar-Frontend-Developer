import React, { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();
export default function Context({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [modalData, setModalData] = useState([]);
  const value = { setShowNav, showNav, setModalData, modalData };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export function useData() {
  return useContext(appContext);
}
