
import React, { useState, useEffect } from 'react';
import { queryFirestoreCollectionByCollege } from '../handle/handlequery'; // Import your Firestore query function
import { updateMachineStatus } from '../handle/handleupdate'; // Import the updateMachineStatus function
import Log from './Log'; 
import { Link } from 'react-router-dom';
import './college.css'

export default function Lovett() {
    const redButtonStyle = {
        borderRadius: '15px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to right, #F22222, #fff)',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
        borderStyle: 'ridge',
        borderColor: '#D3D3D3'
    };
    const yellowButtonStyle = {
        borderRadius: '15px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to right, #FFE03E, #fff)',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
        borderStyle: 'ridge',
        borderColor: '#D3D3D3'
    };
    const greenButtonStyle = {
        borderRadius: '15px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to right, #18D914, #fff)',
        color: '#fff',
        border: 'none',
        padding: '40px 30px',
        fontSize: '16px',
        width: '200px',
        cursor: 'pointer',
        marginBottom: '20px',
        borderStyle: 'ridge',
        borderColor: '#D3D3D3'
    };
    const topLineStyle = {
       
        
        
    };

    const bottomLineStyle = {
        
    }

  const [queryWasherResults, setQueryWasherResults] = useState([]);
  const [queryDryerResults, setQueryDryerResults] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

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


  // Fetch data when the component mounts
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
            <a href="."><img class = "logo" src="../../logo.jpg"></img></a>
        <body>

        <div class="container">
            <div class = "header">
                <h2 class="title">Lovett's Laundry Room</h2>
                <Link
                            to={{
                            pathname: `/logs/lovett`,
                            }}
                        >
                            <a class="log">
                                <h4>where's my laundry?</h4>
                            </a>
                </Link>
            </div>

            <div class="body">

                <div class="content">
                    <h3 class="subtitle">Washers</h3>
                
                    {queryWasherResults.map((result, index) => (
                        <Link
                            key={index}
                            to={{
                            pathname: `/machine-details/${result.id}`,
                            }}
                        >
                            <button style={
                                result.status === 0
                                ? greenButtonStyle
                                : result.status === 1
                                ? redButtonStyle
                                : result.status === 2
                                ? yellowButtonStyle
                                : greenButtonStyle 
                            } className="custom-button">
                                <span class="machine-name" className="machine-name">{result.type} {result.number}</span>
                                <span class="machine-status">{result.status === 0
                                ? "Available"
                                : result.status === 1
                                ? "In Use"
                                : result.status === 2
                                ? "Broken"
                                : "Other"}</span>
                            </button>
                        </Link>
                    ))}
                
                    <h3>Dryers</h3>
                    {queryDryerResults.map((result, index) => (
                        <Link
                            key={index}
                            to={{
                            pathname: `/machine-details/${result.id}`,
                            }}
                        >
                            <button style={
                                result.status === 0
                                ? greenButtonStyle
                                : result.status === 1
                                ? redButtonStyle
                                : result.status === 2
                                ? yellowButtonStyle
                                : greenButtonStyle 
                            } className="custom-button">
                                <span class="machine-name" className="machine-name">{result.type} {result.number}</span>
                                <span class="machine-status">{result.status === 0
                                ? "Available"
                                : result.status === 1
                                ? "In Use"
                                : result.status === 2
                                ? "Broken"
                                : greenButtonStyle}</span>
                            </button>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
        </body>
        </html>
    )
}