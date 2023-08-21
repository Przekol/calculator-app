'use client';
import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

import LoginButton from '@/app/components/buttons/LoginButton';
import { useRouter } from 'next/navigation';
import { useAuthUser } from '@/app/hooks/useAuthUser';

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuthUser();
  React.useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [loading]);

  return (
    <>
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
