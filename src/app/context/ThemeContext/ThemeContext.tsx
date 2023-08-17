import React from 'react';

type ThemeContextType = {
  toggleColorMode: () => void;
};

const defaultValues: ThemeContextType = {
  toggleColorMode: () => {},
};

const ThemeContext = React.createContext<ThemeContextType>(defaultValues);

export { ThemeContext };
