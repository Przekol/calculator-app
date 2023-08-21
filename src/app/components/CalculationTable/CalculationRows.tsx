import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { CalculationResult, CommunicationCalculation } from '../../../../types';
import UserInfo from '@/app/components/UserInfo/UserInfo';

type CalculationRowsProps = {
  calculations: CalculationResult[] | CommunicationCalculation[];
  variant: 'all' | 'one';
};

export default function CalculationRows({ calculations, variant }: CalculationRowsProps) {
  return (
    <TableBody>
      {calculations.map((calculation, index) => (
        <TableRow key={calculation.calculationId}>
          {variant === 'one' && (
            <>
              <TableCell
                sx={{ textAlign: 'center' }}
              >{`${calculation.num1} ${calculation.operation} ${calculation.num2}`}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{calculation.result}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{calculation.time}</TableCell>
            </>
          )}

          {variant === 'all' && (
            <>
              <TableCell
                sx={{ textAlign: 'center' }}
              >{`${calculation.num1} ${calculation.operation} ${calculation.num2}`}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{calculation.result}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{calculation.time}</TableCell>
              {'userId' in calculation && (
                <TableCell style={{ textAlign: 'center' }}>
                  <UserInfo userId={calculation.userId} />
                </TableCell>
              )}
            </>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}
