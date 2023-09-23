import { firestore } from "../firebase_setup/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

// Define a Firestore query handler function with a filter
async function queryFirestoreCollectionByCollege(college) {
  try {
    // Reference to a Firestore collection
    const collectionRef = collection(firestore, "machines");

    // Create a query with a filter to match documents with a specific college
    const q1 = query(
        collectionRef,
        where("college", "==", college),
        where("type", "==", "washer")
      );
    const q2 = query(
        collectionRef,
        where("college", "==", college),
        where("type", "==", "dryer")
      );
    // Query documents based on the filter
    const querySnapshot = await getDocs(q1);
    const querySnapshot2 = await getDocs(q2);

    // Initialize an array to store the results
    const results1 = [];

    // Loop through the documents and add their data to the results array
    querySnapshot.forEach((doc) => {
      // Access the data of each document
      const data = doc.data();
      results1.push(data);
    });

    const results2 = [];

    // Loop through the documents and add their data to the results array
    querySnapshot2.forEach((doc) => {
      // Access the data of each document
      const data = doc.data();
      results2.push(data);
    });

    return [results1, results2];
  } catch (error) {
    console.error("Error querying Firestore:", error);
    throw error;
  }
}

export { queryFirestoreCollectionByCollege };

