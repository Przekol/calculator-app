'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, useMediaQuery } from '@mui/material';
import { theme as customTheme } from '@/app/utils/theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCacheProvider';
import { ThemeContext } from './ThemeContext';

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const isPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const storedColorMode =
    localStorage.getItem('colorMode') || (isPrefersDarkMode ? ColorMode.Dark : ColorMode.Light);
  const [mode, setMode] = React.useState<ColorMode>(storedColorMode as ColorMode);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage)
      localStorage.setItem('colorMode', mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: ColorMode) =>
          prevMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light,
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
        },
        customTheme,
      ),
    [mode],
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
