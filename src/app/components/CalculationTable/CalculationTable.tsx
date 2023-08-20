import React from 'react';
import { Table, TableContainer } from '@mui/material';
import { CalculationResult } from '../../../../types';
import CalculationHeader from '@/app/components/CalculationTable/CalculationHeader';
import CalculationRows from '@/app/components/CalculationTable/CalculationRows';

type CalculationTableProps = {
  calculations: CalculationResult[];
};

export default function CalculationTable({ calculations }: CalculationTableProps) {
  const headNames = ['Calculation', 'Result', 'Time'];

  return (
    <TableContainer sx={{ padding: 1, borderRadius: 5 }}>
      <Table>
        <CalculationHeader headNames={headNames} />
        <CalculationRows calculations={calculations} />
      </Table>
    </TableContainer>
  );
}
