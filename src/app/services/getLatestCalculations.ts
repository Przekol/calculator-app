import { CalculationData, CalculationResult, GetCalculationsOptions } from '../../../types';
import { collection, limit, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '@/app/utils/firebase';

const getLatestCalculations = async (
  userUid: string,
  setData: (data: CalculationResult[]) => void,
  options?: GetCalculationsOptions,
) => {
  const colRef = collection(db, `users/${userUid}/calculations`);
  const q = query(colRef, orderBy('timestamp', 'desc'), limit(options?.limit || 10));

  return onSnapshot(q, snapshot => {
    const data = snapshot.docs.map(doc => ({
      ...(doc.data() as CalculationData),
      calculationId: doc.id,
      time: doc.data().time as string,
      timestamp: doc.data().timestamp,
    }));
    setData(data);
  });
};

export { getLatestCalculations };
