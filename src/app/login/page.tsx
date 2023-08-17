'use client';
import { Button, Container, Paper, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function LoginPage() {
  function handleSignInWithGoogle(): void {
    console.log('Zalogowany');
  }

  return (
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
      </Paper>
    </Container>
  );
}
