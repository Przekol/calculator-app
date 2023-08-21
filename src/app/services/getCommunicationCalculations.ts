import {
  CalculationResult,
  CommunicationCalculation,
  GetCalculationsOptions,
} from '../../../types';
import { collection, limit, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '@/app/utils/firebase';

const getCommunicationCalculations = async (
  setData: (data: CommunicationCalculation[]) => void,
  options?: GetCalculationsOptions,
) => {
  const colRef = collection(db, 'communication');
  const q = query(colRef, orderBy('timestamp', 'desc'), limit(options?.limit || 10));

  return onSnapshot(q, snapshot => {
    const data = snapshot.docs.map(doc => ({
      ...(doc.data() as CalculationResult),

      userId: doc.data().userId as string,
      calculationId: doc.data().calculationId as string,
      communicationId: doc.id,
    }));

    setData(data);
  });
};

export { getCommunicationCalculations };
