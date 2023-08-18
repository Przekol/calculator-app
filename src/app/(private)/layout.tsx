import React from 'react';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import { Box, Container } from '@mui/material';
import Navbar from '@/app/components/Navbar/Navbar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <Box>
        <Navbar />
        <Container
          component={'main'}
          maxWidth="md"
          sx={{
            display: 'flex',
            padding: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}
        >
          {children}
        </Container>
      </Box>
    </PrivateRoute>
  );
}
