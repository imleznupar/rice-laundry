import React, { useState, useEffect } from 'react';
import { queryFirestoreCollectionByCollege } from '../handle/handlequery'; // Import your Firestore query function
import { updateMachineStatus } from '../handle/handleupdate'; // Import the updateMachineStatus function

function Test() {
  // State to store the query results
  const [queryWasherResults, setQueryWasherResults] = useState([]);
  const [queryDryerResults, setQueryDryerResults] = useState([]);

  // Function to fetch and set the query results
  const fetchData = async () => {
    try {
      const college = 'lovett'; // Replace with the college you want to filter by
      const results = await queryFirestoreCollectionByCollege(college);
      setQueryWasherResults(results[0]);
      setQueryDryerResults(results[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpdateStatus = async (id,cur) => {
    console.log("handle update status")
    console.log(id)
    try {
      var newStatus = 1; 
      if (cur === 1) {
        newStatus = 0
      }
      const documentId = id; // Replace with the ID of the machine document to update
      await updateMachineStatus(documentId, newStatus);
      alert('Machine status updated successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error updating machine status:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the data is fetched only once on mount

  return (
    <div>
      <h1>Test</h1>
        <h3>Washer</h3>
        <ul>
            {queryWasherResults.map((result, index) => (
                <li key={index}>
                    <p>Type: {result.type}</p>
                    <p>Number: {result.number}</p>
                    <p>Status: {result.status}</p>
                    <p>College: {result.college}</p>
                    <button onClick={() => handleUpdateStatus(result.id,result.status)}>Update Status</button>
                </li>
            ))}
        </ul>
        <h3>Dryer</h3>
        <ul>
            {queryDryerResults.map((result, index) => (
                <li key={index}>
                    <p>Type: {result.type}</p>
                    <p>Number: {result.number}</p>
                    <p>Status: {result.status}</p>
                    <p>College: {result.college}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Test;
