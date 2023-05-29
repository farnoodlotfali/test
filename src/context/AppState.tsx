import { AppContext } from "./AppContext";

const AppState = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppState;
