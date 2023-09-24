import React, { useState, useEffect } from 'react';
import { queryLogsByCollege } from "../handle/handlelogs"
import { handleSubmit } from '../handle/handlesubmit';
import { useParams } from 'react-router-dom';

export default function Log() {

    const {college} = useParams()
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
        setNewLog({ ...newLog, timestamp: currentTimestamp });
        const success = await handleSubmit(newLog);
    
        if (success) {
          // Clear the form fields if the submission is successful
          setNewLog({
            from: '',
            to: '',
            college: 'lovett',
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
            <h1>Log</h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                <label>
                    From:
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
                </div>
                <div>
                <label>
                    To:
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
                </div>
                {/* Rest of your form fields */}
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>



            {loading ? ( // Display loading screen while loading is true
                <div>Loading...</div>
            ) : (
                <>
                {queryResults.map((result, index) => (
                    <div key={index}>
                        <p> {result.timestamp?.toDate().toLocaleString()} | {result.from} is moved to {result.to}</p>
                  </div>
                ))}
                </>
            )}
        </html>
    )
}