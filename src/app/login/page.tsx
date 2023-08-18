import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

import AuthGuardRouteRedirect from '@/app/components/PrivateRoute/AuthGuardRouteRedirect';
import LoginButton from '@/app/components/buttons/LoginButton';

export default function LoginPage() {
  return (
    <>
      <AuthGuardRouteRedirect />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: 6,
            borderRadius: 5,
          }}
        >
          <CalculateIcon sx={{ fontSize: 100, color: 'primary.main' }} />
          <Typography variant={'h4'} align="center" gutterBottom={true}>
            Log in to Calculator App
          </Typography>
          <LoginButton />
        </Paper>
      </Container>
    </>
  );
}
