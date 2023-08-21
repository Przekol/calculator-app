import React from 'react';
import Box from '@mui/material/Box';
import { ThemeToggle } from '@/app/components/ThemeToggle/ThemeToogle';

export function NavbarThemeToggle() {
  return (
    <Box
      sx={{
        mr: 2,
        display: 'flex',
      }}
    >
      <ThemeToggle />
    </Box>
  );
}
