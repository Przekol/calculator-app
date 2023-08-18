import React from 'react';
import { Metadata } from 'next';
import { ThemeToggle } from '@/app/components/ThemeToggle/ThemeToogle';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'EpicChat - Login',
  description: 'EpicChat - Login Page',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <ThemeToggle />
        </Box>
      </header>
      {children}
    </div>
  );
}
