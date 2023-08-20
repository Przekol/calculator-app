'use client';
import React, { useState } from 'react';
import { TextField, Grid, Paper, Typography, Box } from '@mui/material';
import AlertDialog from '@/app/components/AlertDialog/AlertDialog';

import OperationButton, { Operation } from '@/app/components/buttons/OperationButton';

export default function CalculatorPage() {
  const [form, setForm] = useState({
    num1: 0,
    num2: 0,
    operation: Operation.ADD,
    result: 0,
  });
  const [openAlert, setOpenAlert] = useState(false);

  const buttonOperations = [
    { operation: Operation.ADD },
    { operation: Operation.SUBTRACT },
    { operation: Operation.MULTIPLY },
    { operation: Operation.DIVIDE },
  ];

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleOperation = (operation: Operation) => {
    const num1 = form.num1;
    const num2 = form.num2;

    if (operation === Operation.DIVIDE && num2 === 0) {
      handleOpenAlert();
      return;
    }

    let result = 0;
    switch (operation) {
      case Operation.ADD:
        result = num1 + num2;
        break;
      case Operation.SUBTRACT:
        result = num1 - num2;
        break;
      case Operation.MULTIPLY:
        result = num1 * num2;

        break;
      case Operation.DIVIDE:
        result = num1 / num2;
        break;
      default:
        break;
    }
    updateForm('result', result);
    updateForm('operation', operation);

    clearForm();
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
      num1: 0,
      num2: 0,
    }));
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
        message={'You cannot divide by 0.'}
        severity="warning"
      />
    </Grid>
  );
}
