import React from 'react';
import { Metadata } from 'next';
import { ThemeToggle } from '@/app/components/ThemeToggle/ThemeToogle';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Calculator App - Results History',
  description: 'Calculator App - Results History',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
