import { CalculationData } from '../../../types';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '@/app/utils/firebase';
import { User } from '@firebase/auth';

const saveCalculationData = async (user: User, calculationData: CalculationData) => {
  await addDoc(collection(db, `users/${user?.uid}/calculations`), {
    ...calculationData,
    timestamp: serverTimestamp(),
    time: new Date().toUTCString(),
  });
};

export { saveCalculationData };
