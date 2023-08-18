'use client';

import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import { useAuthActions } from '@/app/hooks/useAuthActions';

export default function DashboardPage() {
  const { user, loading } = useAuthUser();
  const { signOut } = useAuthActions();
  return (
    <main>
      Home Page {user?.email}
      <Button
        variant={'outlined'}
        sx={{
          borderRadius: 5,
          width: '100%',
          fontSize: { xs: '16px', sm: '24px' },
          textTransform: 'none',
        }}
        onClick={e => signOut()}
      >
        <GoogleIcon sx={{ fontSize: { xs: '20px', sm: '28px' }, marginRight: 2 }} />
        Log Out
      </Button>
    </main>
  );
}
