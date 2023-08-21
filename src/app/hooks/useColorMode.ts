import { Theme, useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext/ThemeContext';

type UseColorMode = {
  toggleColorMode: () => void;
  theme: Theme;
};

const useColorMode = (): UseColorMode => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeContext);

  return { toggleColorMode, theme };
};

export { useColorMode };
