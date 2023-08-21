import { doc, getDoc } from '@firebase/firestore';
import { db } from '@/app/utils/firebase';

const getUserData = async (userId: string) => {
  const userDocRef = doc(db, 'users', userId);
  const userDocSnap = await getDoc(userDocRef);
  if (userDocSnap.exists()) {
    return userDocSnap.data();
  }
};

export { getUserData };
