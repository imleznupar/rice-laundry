import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateMachineStatus } from '../handle/handleupdate'; // Import the updateMachineStatus function
import { queryFirestoreCollectionById } from '../handle/handlequery';

function WasherDetails() {
    const [queryResults, setQueryResults] = useState([]);
    const { id } = useParams();

  const handleUpdateStatus = async (id,cur) => {
    console.log("handle update status")
    try {
      var newStatus = 1; 
      if (cur == 1) {
        console.log("hi")
        newStatus = 0
      }
      const documentId = id; // Replace with the ID of the machine document to update
      console.log(id,newStatus)
      await updateMachineStatus(documentId, newStatus);
      alert('Machine status updated from to successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error updating machine status:', error);
    }
  };

  const fetchData = async () => {
    try {
        console.log(id)
      const results = await queryFirestoreCollectionById(id);
      setQueryResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Washer Details</h2>
      {console.log(queryResults)}
      <p>{queryResults.type} {queryResults.number}</p>
      <p>Status: {queryResults.status}</p>
      <button onClick={() => handleUpdateStatus(id, queryResults.status)}>
        Update Status
      </button>
    </div>
  );
}

export default WasherDetails;
