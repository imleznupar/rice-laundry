
import './home.css'
import React, { useState } from 'react';

export default function Home() {

    const [selectedCollege, setSelectedCollege] = useState('baker'); // State to store the selected college

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if a college is selected
        if (selectedCollege) {
            // Redirect to the selected college's page
            window.location.href = `/${selectedCollege}`;
        }
    };

    const handleCollegeChange = (e) => {
        setSelectedCollege(e.target.value);
    };

    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap" rel="stylesheet"/>
            </head>

            <div class = "center">
                <h2>Welcome to Laundry @ Rice</h2>
                <img class = "home-logo" src="../../logo.jpg"/>
                <h4>Find out which machines are available!</h4>
                <form onSubmit={handleSubmit}>
                    <label for="res coll">Residential College:</label>
                    <select name="res coll" id="res coll" onChange={handleCollegeChange}>
                        <option value="baker">Baker</option>
                        <option value="willrice">Will Rice</option>
                        <option value="hanszen">Hanszen</option>
                        <option value="wiess">Wiess</option>
                        <option value="jones">Jones</option>
                        <option value="brown">Brown</option>
                        <option value="lovett">Lovett</option>
                        <option value="sidrichardson">Sid Richardson</option>
                        <option value="martel">Martel</option>
                        <option value="mcmurtry">McMurtry</option>
                        <option value="duncan">Duncan</option>
                    </select>
                    <br></br>
                        <input class = "button" type="submit" value="START!"></input>
                </form>
            </div>
        </html>
    )
}