import React, { useState, useEffect } from 'react';
import { queryLogsByCollege } from "../handle/handlelogs"
import { handleSubmit } from '../handle/handlesubmit';
import { useParams } from 'react-router-dom';
import './college.css'

export default function Log() {

    const { college } = useParams()
    const [queryResults, setQueryResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newLog, setNewLog] = useState({
        from: '',
        to: '',
        college: '',
        timestamp: '', 
      });

    const fetchData = async () => {
        console.log("fetch dataing")
        console.log( college )
        try {
          const results = await queryLogsByCollege(college);
          setQueryResults(results);
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); 
        }
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        const currentTimestamp = new Date().toLocaleString();
        console.log("submit")
        console.log({ ...newLog, timestamp: currentTimestamp, college: college })
        setNewLog({ ...newLog, timestamp: currentTimestamp, college: college });
        const success = await handleSubmit(newLog,college);
    
        if (success) {
          // Clear the form fields if the submission is successful
          setNewLog({
            from: '',
            to: '',
            college: '',
            timestamp: '', 
          });
          alert('New log entry added successfully');
          window.location.reload();
        }
      };    

      useEffect(() => {
        fetchData();
      }, []);
      

    return (
        <html>
              <div style={{ display: "flex", justifyContent: "center", marginRight: "70px" }}>
                <a href="..">
                  <img class="logo" src="../../logo.jpg" alt="Logo" />
                </a>
              </div>            
              <body>
              <h2>&nbsp;</h2>
              <h2>&nbsp;</h2>

              <h2 class="title">Lovett's Laundry Room Log</h2>

              <form onSubmit={handleFormSubmit}>
                  <div style={{ textAlign: "center" }} >
                  <label style={{ marginRight: "10px" }}>
                      From:&nbsp;
                      <select
                      name="from"
                      value={newLog.from}
                      onChange={(e) => setNewLog({ ...newLog, from: e.target.value })}
                      required
                      >
                          <option value="">Select...</option>
                          <option value="washer 1">washer 1</option>
                          <option value="washer 2">washer 2</option>
                          <option value="washer 3">washer 3</option>
                          <option value="dryer 1">dryer 1</option>
                          <option value="dryer 2">dryer 2</option>
                          <option value="dryer 3">dryer 3</option>
                          <option value="bin">bin</option>
                      </select>
                  </label>
                  <label style={{ marginRight: "10px" }}>
                      To:&nbsp;
                      <select
                      name="to"
                      value={newLog.to}
                      onChange={(e) => setNewLog({ ...newLog, to: e.target.value })}
                      required
                      >
                          <option value="">Select...</option>
                          <option value="washer 1">washer 1</option>
                          <option value="washer 2">washer 2</option>
                          <option value="washer 3">washer 3</option>
                          <option value="dryer 1">dryer 1</option>
                          <option value="dryer 2">dryer 2</option>
                          <option value="dryer 3">dryer 3</option>
                          <option value="bin">bin</option>
                      </select>
                  </label>

                  <button type="submit">Submit</button>
                  </div>
              </form>
              <hr></hr>
              <p>&nbsp;</p>                   
              {loading ? ( // Display loading screen while loading is true
                  <div>Loading...</div>
              ) : (
                  <>
                  {queryResults.map((result, index) => (
                      <div key={index} style={{marginLeft: "10px", marginRight: "10px"}}>
                          <p style={{ marginLeft:"10px", marginRight:"10px"}}> {result.timestamp?.toDate().toLocaleString()}</p> 
                          <p style={{
                            backgroundColor: "#b2dfeb",
                            fontSize: "16px",
                            padding: "10px 0",
                            margin: "0",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginRight: "10px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}>
                            <span style={{ flex: "1" }}>{result.from}</span>
                            <span style={{ flex: "1", textAlign: "center" }}>&#8594;</span>
                            <span style={{ flex: "1", textAlign: "right" }}>{result.to}</span>
                          </p> 
                          <p>&nbsp;</p>                   
                      </div>
                  ))}
                  </>
              )}
            </body>
        </html>
    )
}