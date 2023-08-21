import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CalculationHistoryList from '@/app/components/CalculationList/CalculationHistoryList';

export default function ResultsHistoryPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" height="80vh" sx={{ padding: 4 }}>
      <Paper elevation={6} sx={{ padding: 2, borderRadius: 5 }}>
        <Typography variant="h4" sx={{ paddingBottom: 2, textAlign: 'center' }}>
          Calculation History of All Users
        </Typography>
        <CalculationHistoryList />
      </Paper>
    </Grid>
  );
}
