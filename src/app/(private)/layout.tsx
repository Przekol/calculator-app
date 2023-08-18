import React from 'react';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <PrivateRoute>{children}</PrivateRoute>;
}
