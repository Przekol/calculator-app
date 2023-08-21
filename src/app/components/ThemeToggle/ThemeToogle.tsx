'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '@/app/hooks/useColorMode';

export function ThemeToggle() {
  const { toggleColorMode, theme } = useColorMode();

  return (
    <IconButton sx={{ ml: 1, color: 'inherit' }} onClick={toggleColorMode}>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
