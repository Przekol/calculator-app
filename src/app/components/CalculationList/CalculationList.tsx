'use client';
import { useAuthUser } from '@/app/hooks/useAuthUser';
import React from 'react';
import { CalculationResult } from '../../../../types';
import { getLatestCalculations } from '@/app/services/getLatestCalculations';
import CalculationTable from '../CalculationTable/CalculationTable';

export default function CalculatorForm() {
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
  return <CalculationTable calculations={calculations} />;
}
