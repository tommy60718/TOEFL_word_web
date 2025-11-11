import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './useAuth';

export function useFirestoreProgress(key, initialValue) {
  const { user } = useAuth();
  const [storedValue, setStoredValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const initialValueRef = useRef(initialValue);

  useEffect(() => {
    initialValueRef.current = initialValue;
  }, [initialValue]);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const progressRef = doc(db, 'users', user.uid, 'progress', key);

      // Subscribe to real-time updates
      const unsubscribe = onSnapshot(
        progressRef,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            setStoredValue(docSnapshot.data());
          } else {
            setStoredValue(initialValueRef.current);
          }
          setLoading(false);
        },
        (error) => {
          console.error('Error listening to progress:', error);
          setLoading(false);
        }
      );

      return unsubscribe;
    } catch (error) {
      console.error('Error setting up progress listener:', error);
      setLoading(false);
    }
  }, [user, key]);

  const setValue = useCallback(async (value) => {
    if (!user) {
      console.warn('User not authenticated');
      return;
    }

    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      // Save to Firestore
      const progressRef = doc(db, 'users', user.uid, 'progress', key);
      await setDoc(progressRef, valueToStore, { merge: false });
    } catch (error) {
      console.error('Error writing to Firestore:', error);
    }
  }, [user, key, storedValue]);

  const resetValue = useCallback(async () => {
    if (!user) {
      console.warn('User not authenticated');
      return;
    }

    try {
      setStoredValue(initialValueRef.current);

      // Reset to initial value in Firestore
      const progressRef = doc(db, 'users', user.uid, 'progress', key);
      await setDoc(progressRef, initialValueRef.current, { merge: false });
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  }, [user, key]);

  return [storedValue, setValue, loading, resetValue];
}
