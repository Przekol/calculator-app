import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import CalculatorForm from '@/app/components/CalculationList/CalculationList';

export default function DashboardPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" height="80vh" sx={{ padding: 4 }}>
      <Paper elevation={6} sx={{ padding: 2, borderRadius: 5 }}>
        <Typography variant="h4" sx={{ paddingBottom: 2, textAlign: 'center' }}>
          Your Latest Calculations
        </Typography>

        <CalculatorForm />
      </Paper>
    </Grid>
  );
}
