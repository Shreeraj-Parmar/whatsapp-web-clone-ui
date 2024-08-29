import { createContext, useState } from "react";

export const drawerContext = createContext(null);

const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState();
  return (
    <drawerContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
      }}
    >
      {children}
    </drawerContext.Provider>
  );
};

export default DrawerProvider;
