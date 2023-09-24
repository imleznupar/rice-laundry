import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = async (newLog, college) => {
  try {
    const logsCollectionRef = collection(firestore, 'logs');
    const newLogEntry = {
      ...newLog,
      timestamp: serverTimestamp(),
      college: college,
    };
    await addDoc(logsCollectionRef, newLogEntry);
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error adding log entry:', error);
    return false; // Return false to indicate failure
  }
};

export  {handleSubmit};
