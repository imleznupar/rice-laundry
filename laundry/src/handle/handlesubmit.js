import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = async (newLog) => {
  try {
    const logsCollectionRef = collection(firestore, 'logs');
    const newLogEntry = {
      ...newLog,
      timestamp: serverTimestamp(),
    };
    await addDoc(logsCollectionRef, newLogEntry);
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error adding log entry:', error);
    return false; // Return false to indicate failure
  }
};

export  {handleSubmit};
