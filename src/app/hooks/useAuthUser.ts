import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/app/utils/firebase';
import React from 'react';
import { doc, getDoc, serverTimestamp, setDoc } from '@firebase/firestore';

const useAuthUser = () => {
  const [user, loading] = useAuthState(auth);

  React.useEffect(() => {
    if (!user) return;
    const updateUserProfile = async () => {
      const userRef = doc(db, `users/${user.uid}`);
      const snapshot = await getDoc(userRef);
      if (!snapshot.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          photoURL: user.photoURL,
          timestamp: serverTimestamp(),
        });
      }
    };
    updateUserProfile();
  }, [user]);

  return {
    user,
    loading,
  };
};
export { useAuthUser };
