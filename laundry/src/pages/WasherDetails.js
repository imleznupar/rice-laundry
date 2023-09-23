import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateMachineStatus } from '../handle/handleupdate'; // Import the updateMachineStatus function
import { queryFirestoreCollectionById } from '../handle/handlequery';

function WasherDetails() {
    const [queryResults, setQueryResults] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("0"); // Initial selected status
    const { id } = useParams();

  const handleUpdateStatus = async () => {
    console.log("handle update status")
    try {
      console.log(id,selectedStatus)
      await updateMachineStatus(id, parseInt(selectedStatus));
      alert('Machine status updated from to successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error updating machine status:', error);
    }
  };

  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
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
    <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap" rel="stylesheet"/>
            </head>

            <div class = "center">
                <img class = "lovett-logo" src="../../logos/Lovett\ Logo.jpeg"/>
                <h2>{queryResults.type} {queryResults.number}</h2>
                <h2>Current Status: {queryResults.status}</h2>
                <form>
                    <label>Change Status:</label>
                    <select onChange={handleChangeStatus}>
                        <option value="0">available</option>
                        <option value="1">in use</option>
                        <option value="2">broken</option>
                    </select>
                    <br/>
                </form>
                <button onClick={handleUpdateStatus}> change! </button>
            </div>
        </html>
  );
}

export default WasherDetails;
