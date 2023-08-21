'use client';
import { Typography } from '@mui/material';
import CalculationTable from '@/app/components/CalculationTable/CalculationTable';
import LinkButton from '@/app/components/buttons/LinkButton';
import React from 'react';
import { CommunicationCalculation } from '../../../../types';
import { getCommunicationCalculations } from '@/app/services/getCommunicationCalculations';

export default function CalculationHistoryList() {
  const [communicationCalculations, setCommunicationCalculations] = React.useState<
    CommunicationCalculation[]
  >([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = await getCommunicationCalculations(setCommunicationCalculations);

      return () => unsubscribe();
    };
    fetchData();
  }, []);

  return (
    <>
      {communicationCalculations.length === 0 ? (
        <Typography variant="body1" align="center">
          No one has done any calculations yet.
        </Typography>
      ) : (
        <CalculationTable variant={'all'} calculations={communicationCalculations} />
      )}
      <LinkButton href={'/calculator'} title={'Go to Calculator'} />
    </>
  );
}
