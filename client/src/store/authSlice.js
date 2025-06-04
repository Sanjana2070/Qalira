import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

export function useAuthListener() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      // Dispatch to Redux or set local state
    });

    return () => unsubscribe();
  }, []);
}
