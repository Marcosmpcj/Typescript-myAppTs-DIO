import { createLocalStorage, getAllLocalStorage } from "../../services/storage";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  },[]);

  const user = "Marcos";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
