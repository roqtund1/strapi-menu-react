import { useState, createContext, useContext } from "react";

const AppContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
