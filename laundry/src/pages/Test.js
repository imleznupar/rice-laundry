import React, { useState, useEffect } from 'react';
import { queryFirestoreCollectionByCollege } from '../handle/handlequery'; // Import your Firestore query function
import { updateMachineStatus } from '../handle/handleupdate'; // Import the updateMachineStatus function

function Test() {
    const status_1 = {
        position: 'relative',
        backgroundColor: '#D30000',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
    };

    const status_0 = {
        position: 'relative',
        backgroundColor: '#3CB043',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
    };

    const status_2 = {
        position: 'relative',
        backgroundColor: '#FBEC5D',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
    };
  

  // State to store the query results
  const [queryWasherResults, setQueryWasherResults] = useState([]);
  const [queryDryerResults, setQueryDryerResults] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [popupVisible, setPopupVisible] = useState(false); // State to control popup visibility


  // Function to fetch and set the query results
  const fetchData = async () => {
    try {
      const college = 'lovett'; // Replace with the college you want to filter by
      const results = await queryFirestoreCollectionByCollege(college);
      setQueryWasherResults(results[0]);
      setQueryDryerResults(results[1]);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
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

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };


  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the data is fetched only once on mount

  return (
    <div>
      <h1>Test</h1>
      {loading ? ( // Display loading screen while loading is true
        <div>Loading...</div>
      ) : (
        <>
          <h3>Washer</h3>
          {queryDryerResults.map((result, index) => (
              <button style={result.status === 0 ? status_0 : status_1}>
                  <p>{result.type} {result.number}</p>
                  <p>Status: {result.status}</p>
                  <button onClick={() => handleUpdateStatus(result.id, result.status)}>
                      Update Status
                  </button>
              </button>
            ))}
            

          <h3>Dryer</h3>
            {queryDryerResults.map((result, index) => (
              <button style={result.status === 0 ? status_0 : status_1}>
                  <p>{result.type} {result.number}</p>
                  <p>Status: {result.status}</p>
                  <button onClick={() => handleUpdateStatus(result.id, result.status)}>
                      Update Status
                  </button>
              </button>
            ))}
        </>
      )}
    </div>
  );
}

export default Test;
