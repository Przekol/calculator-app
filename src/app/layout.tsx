import './globals.css';
import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Calculator App',
  description: 'Calculator App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const DynamicThemeRegistry = dynamic(() => import('@/app/context/ThemeContext/ThemeRegistry'), {
    ssr: false,
  });
  return (
    <html lang="en">
      <body>
        <DynamicThemeRegistry>{children}</DynamicThemeRegistry>
      </body>
    </html>
  );
}
