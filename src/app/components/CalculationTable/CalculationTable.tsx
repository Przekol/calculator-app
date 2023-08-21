import React from 'react';
import { Table, TableContainer } from '@mui/material';
import { CalculationResult, CommunicationCalculation } from '../../../../types';
import CalculationHeader from '@/app/components/CalculationTable/CalculationHeader';
import CalculationRows from '@/app/components/CalculationTable/CalculationRows';

type CalculationTableProps = {
  calculations: CalculationResult[] | CommunicationCalculation[];
  variant: 'all' | 'one';
};

export default function CalculationTable({ calculations, variant }: CalculationTableProps) {
  const headNamesOne = ['Calculation', 'Result', 'Time'];
  const headNamesAll = ['Calculation', 'Result', 'Time', 'User'];

  const headNames = variant === 'one' ? headNamesOne : headNamesAll;

  return (
    <TableContainer sx={{ padding: 1, borderRadius: 5 }}>
      <Table>
        <CalculationHeader headNames={headNames} />
        <CalculationRows variant={variant} calculations={calculations} />
      </Table>
    </TableContainer>
  );
}
