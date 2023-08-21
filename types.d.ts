import React from 'react';
import { Operation } from '@/app/components/buttons/OperationButton';
import { AlertColor } from '@mui/material/Alert/Alert';
import { Timestamp } from '@firebase/firestore';

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

type CalculationResult = CalculationData & {
  calculationId: string;
  time: string;
  timestamp: Timestamp;
};

type GetCalculationsOptions = {
  limit?: number;
};

type CommunicationCalculation = CalculationResult & {
  communicationId: string;
  userId: string;
};
