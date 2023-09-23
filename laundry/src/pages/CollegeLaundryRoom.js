import React from 'react';
import Header from '../components/Header';

function CollegeLaundryRoom({ collegeName, washerCount, dryerCount }) {
    // this is function that takes the collegename as an input, creates the specific college laundry page
    // wCount + dCount create that many washer n dryer buttons
    const buttonStyles = {
        red: {
            position: 'relative',
            backgroundColor: '#D30000',
            color: '#fff',
            border: 'none',
            padding: '40px 30px',
            fontSize: '16px',
            width: '200px',
            cursor: 'pointer',
            marginBottom: '20px',
        },
        yellow: {
            position: 'relative',
            backgroundColor: '#FBEC5D',
            color: '#fff',
            border: 'none',
            padding: '40px 30px',
            fontSize: '16px',
            width: '200px',
            cursor: 'pointer',
            marginBottom: '20px',
        },
        green: {
            position: 'relative',
            backgroundColor: '#3CB043',
            color: '#fff',
            border: 'none',
            padding: '40px 30px',
            fontSize: '16px',
            width: '200px',
            cursor: 'pointer',
            marginBottom: '20px',
        },
    };
    const topLineStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '50%', // Left-align the top line
    };

    const bottomLineStyle = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '50%', // Right-align the bottom line
        textAlign: 'right', // Add text alignment to the right
    };

    const washerButtons = [];
    for (let i = 1; i <= washerCount; i++) {
        washerButtons.push(
            <button
                key={`washer-${i}`}
                style={{ ...buttonStyles.green }}
                className="custom-button"
            >
                <span style={topLineStyle}>{`Washer ${i}`}</span>
                <span style={bottomLineStyle}>Open</span>
            </button>
        );
    }

    const dryerButtons = [];
    for (let i = 1; i <= dryerCount; i++) {
        dryerButtons.push(
            <button
                key={`dryer-${i}`}
                style={{ ...buttonStyles.green }}
                className="custom-button"
            >
                <span style={topLineStyle}>{`Dryer ${i}`}</span>
                <span style={bottomLineStyle}>Open</span>
            </button>
        );
    }

    return (
        <div>
            <div style={{ float: 'left' }} className="align-left">
                <img src="Rice Laundry Logo" alt="logo" />
            </div>
            <div style={{ float: 'right' }} className="align-right">
                <img src={`${collegeName} logo`} alt={`${collegeName} crest`} />
            </div>
            <Header />
            <h2>{collegeName}'s Laundry Room</h2>
            <h3>Washers</h3>
            {washerButtons}
            
            <h3>Dryers</h3>
            {dryerButtons}
        </div>
    );
}

export default CollegeLaundryRoom;
