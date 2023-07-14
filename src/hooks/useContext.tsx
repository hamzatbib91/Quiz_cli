import React, {createContext, useState, ReactNode} from 'react';

interface AppContextProps {
  variable: boolean;
  parier: boolean;
  setVariable: React.Dispatch<React.SetStateAction<boolean>>;
  setParier: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a new context
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [variable, setVariable] = useState(false);
  const [parier, setParier] = useState(false);

  return (
    <AppContext.Provider
      value={{
        variable,
        setVariable,
        parier,
        setParier,
      }}>
      {children}
    </AppContext.Provider>
  );
};
