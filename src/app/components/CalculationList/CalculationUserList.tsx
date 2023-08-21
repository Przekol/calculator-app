'use client';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import React from 'react';
import { CalculationResult } from '../../../../types';
import { getLatestCalculations } from '@/app/services/getLatestCalculations';
import CalculationTable from '../CalculationTable/CalculationTable';
import { Typography } from '@mui/material';
import LinkButton from '@/app/components/buttons/LinkButton';

export default function CalculationUserList() {
  const { user } = useAuthUser();
  const [calculations, setCalculations] = React.useState<CalculationResult[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setCalculations([]);
        return;
      }
      const unsubscribe = await getLatestCalculations(user.uid, setCalculations);

      return () => unsubscribe();
    };

    fetchData();
  }, [user]);
  return (
    <>
      {calculations.length === 0 ? (
        <Typography variant="body1" align="center">
          You have not performed any calculations yet.
        </Typography>
      ) : (
        <CalculationTable variant={'one'} calculations={calculations} />
      )}
      <LinkButton href={'/calculator'} title={'Go to Calculator'} />
    </>
  );
}
