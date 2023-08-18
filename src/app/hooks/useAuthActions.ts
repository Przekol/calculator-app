import { signOut as signOutFirebase } from '@firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/app/utils/firebase';
import { useRouter } from 'next/navigation';

const useAuthActions = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();
  const signOut = async () => {
    await signOutFirebase(auth);
    router.push('/login');
  };

  return { signInWithGoogle, signOut };
};

export { useAuthActions };
