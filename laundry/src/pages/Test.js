import React, { useState, useEffect } from 'react';
import { queryFirestoreCollectionByCollege } from '../handle/handlequery'; // Import your Firestore query function

function Test() {
  // State to store the query results
  const [queryWasherResults, setQueryWasherResults] = useState([]);
  const [queryDryerResults, setQueryDryerResults] = useState([]);

  // Function to fetch and set the query results
  const fetchData = async () => {
    try {
      const college = 'hanszen'; // Replace with the college you want to filter by
      const results = await queryFirestoreCollectionByCollege(college);
      setQueryWasherResults(results[0]);
      setQueryDryerResults(results[1])
    } catch (error) {
      console.error('Error fetching data:', error);
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
