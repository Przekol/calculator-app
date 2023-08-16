import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

const roboto = Roboto({ style: 'normal', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calculator App',
  description: 'Calculator App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
