import React, { useState, createContext, useContext } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen(!isOpen);
  };

  const contextValue = {
    isOpen,
    toggleHamburger,
  };

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};
