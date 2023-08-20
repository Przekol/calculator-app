import React from 'react';
import { Operation } from '@/app/components/buttons/OperationButton';
import { AlertColor } from '@mui/material/Alert/Alert';

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

type CalculationData = {
  num1: number;
  num2: number;
  operation: Operation;
  result: number;
};

type OperationData = Omit<CalculationData, 'result'>;

type AlertData = {
  message: string;
  severity: AlertColor;
};
