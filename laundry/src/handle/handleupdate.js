import { firestore } from "../firebase_setup/firebase";
import { doc, updateDoc } from "@firebase/firestore";

// Define a Firestore update handler function
async function updateMachineStatus(documentId, newStatus) {
  try {
    // Reference to a specific Firestore document
    const docRef = doc(firestore, "machines", documentId);

    // Update the document with the new status
    await updateDoc(docRef, { status: newStatus });

    console.log(`Machine with ID ${documentId} updated to status: ${newStatus}`);
  } catch (error) {
    console.error("Error updating Firestore document:", error);
    throw error;
  }
}

export { updateMachineStatus };
