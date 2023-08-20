import React from 'react';
import { Operation } from '@/app/components/buttons/OperationButton';

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
