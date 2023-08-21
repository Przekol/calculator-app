// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_YOUR_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_YOUR_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_YOUR_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_YOUR_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_YOUR_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
