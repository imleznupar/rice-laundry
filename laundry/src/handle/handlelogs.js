import { firestore } from "../firebase_setup/firebase";
import { collection, query, where, getDocs } from "@firebase/firestore";

// Define a Firestore query handler function with a filter
async function queryLogsByCollege(college) {
  try {
    // Reference to a Firestore collection
    const collectionRef = collection(firestore, "logs");

    // Create a query with a filter to match documents with a specific college
    const q = query(collectionRef,where("college", "==", college));
    // Query documents based on the filter
    const querySnapshot = await getDocs(q);

    // Initialize an array to store the results
    const results = [];

    // Loop through the documents and add their data to the results array
    querySnapshot.forEach((doc) => {
      // Access the data of each document
      const data = doc.data();
      data.id = doc.id;
      results.push(data);
    });
    return results;
  } catch (error) {
    console.error("Error querying Firestore:", error);
    throw error;
  }
}

export { queryLogsByCollege };

