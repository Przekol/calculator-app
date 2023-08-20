import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { CalculationResult } from '../../../../types';

type CalculationRowsProps = {
  calculations: CalculationResult[];
};

export default function CalculationRows({ calculations }: CalculationRowsProps) {
  return (
    <TableBody>
      {calculations.map((calculation, index) => (
        <TableRow key={calculation.id}>
          <TableCell
            sx={{ textAlign: 'center' }}
          >{`${calculation.num1} ${calculation.operation} ${calculation.num2}`}</TableCell>
          <TableCell style={{ textAlign: 'center' }}>{calculation.result}</TableCell>
          <TableCell style={{ textAlign: 'center' }}>{calculation.time}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
