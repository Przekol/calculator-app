'use client';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import React from 'react';
import { useAuthActions } from '@/app/hooks/useAuthActions';

export default function LoginButton() {
  const { signInWithGoogle } = useAuthActions();

  async function handleSignInWithGoogle(): Promise<void> {
    await signInWithGoogle();
  }
  return (
    <Button
      variant={'outlined'}
      sx={{
        borderRadius: 5,
        width: '100%',
        fontSize: { xs: '16px', sm: '24px' },
        textTransform: 'none',
      }}
      onClick={handleSignInWithGoogle}
    >
      <GoogleIcon sx={{ fontSize: { xs: '20px', sm: '28px' }, marginRight: 2 }} />
      Log in with Google
    </Button>
  );
}
