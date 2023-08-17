import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EpicChat - Login',
  description: 'EpicChat - Login Page',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
