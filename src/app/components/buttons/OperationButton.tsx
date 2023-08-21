import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}
type OperationButtonProps = {
  operation: Operation;
  onClick: (operation: Operation) => void;
} & ButtonProps;

export default function OperationButton({ operation, onClick, ...rest }: OperationButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      aria-label={operation}
      sx={{ borderRadius: 5, fontSize: { xs: '20px', sm: '28px' } }}
      onClick={onClick}
      {...rest}
    >
      {operation}
    </Button>
  );
}
