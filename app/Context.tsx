// Context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface AppContextType {
  value: string; // or boolean based on your initial state
  setValue: (newValue: string) => void; // or (newValue: boolean) => void if you change value type
}

// Create the context with a default value of null
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode; // Specify that children should be of type ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>('show');

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
