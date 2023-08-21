'use client';

import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import OperationButton, { Operation } from '@/app/components/buttons/OperationButton';
import AlertDialog from '@/app/components/AlertDialog/AlertDialog';
import React from 'react';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import { AlertData, CalculationData } from '../../../../types';
import { saveCalculationData } from '@/app/services/saveCalculationData';
import { calculateResult } from '@/app/utils/calculations';

export default function CalculatorForm() {
  const { user } = useAuthUser();
  const [form, setForm] = React.useState<CalculationData>({
    num1: null,
    num2: null,
    operation: Operation.ADD,
    result: 0,
  });
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alert, setAlert] = React.useState<AlertData>({ message: '', severity: 'warning' });

  const buttonOperations = Object.values(Operation).map(operation => ({ operation }));

  const handleOpenAlert = (alertData: AlertData) => {
    setAlert(prevState => ({
      ...prevState,
      message: alertData.message,
      severity: alertData.severity,
    }));
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setAlert(prevState => ({
      ...prevState,
      message: '',
    }));
  };

  const updateForm = (key: string, value: string | number) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  const clearForm = () => {
    setForm(prevState => ({
      ...prevState,
      num1: null,
      num2: null,
    }));
  };

  const handleOperation = async (operation: Operation) => {
    const num1 = form.num1;
    const num2 = form.num2;

    try {
      const result = calculateResult({ num1, num2, operation });
      updateForm('result', result);
      updateForm('operation', operation);

      if (user)
        await saveCalculationData(user, {
          num1,
          num2,
          operation,
          result,
        });

      clearForm();
    } catch (error: any) {
      if (error.message === 'Division by zero is not allowed.') {
        handleOpenAlert({
          message: 'Division by zero is not allowed.',
          severity: 'error',
        });
      } else if (error.message === 'Please enter valid numbers.') {
        handleOpenAlert({
          message: 'Please, enter at least one number.',
          severity: 'info',
        });
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="80vh">
      <Paper elevation={6} sx={{ padding: 6, borderRadius: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Calculator
        </Typography>
        <TextField
          label="Number 1"
          variant="outlined"
          fullWidth
          type="number"
          value={form.num1}
          onChange={e => updateForm('num1', parseFloat(e.target.value))}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Number 2"
          variant="outlined"
          fullWidth
          type="number"
          value={form.num2}
          onChange={e => updateForm('num2', parseFloat(e.target.value))}
          sx={{ marginBottom: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {buttonOperations.map(op => (
            <OperationButton
              key={op.operation}
              operation={op.operation}
              onClick={() => handleOperation(op.operation)}
            />
          ))}
        </Box>
        <Typography variant="h5" align="center" sx={{ marginTop: 2 }}>
          Result: {form.result}
        </Typography>
      </Paper>
      <AlertDialog
        open={openAlert}
        onClose={handleCloseAlert}
        message={alert.message}
        severity={alert.severity}
      />
    </Grid>
  );
}
