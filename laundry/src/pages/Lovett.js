import Header from "../components/Header"

export default function Lovett() {
    const redButtonStyle = {
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
    const yellowButtonStyle = {
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
    const greenButtonStyle = {
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
    }
    return (
        <div>
            <div style={{ float: 'left' }} className="align-left">
                <img src="Rice Laundry Logo" alt="logo" />
            </div>
            <div style={{ float: 'right' }} className="align-right">
                <img src="Lovett Logo" alt="lovett crest" />
            </div>
            <Header />
            <h2>Lovett's Laundry Room</h2>
            <h3>Washers</h3>
            <button style={yellowButtonStyle} className="custom-button">
                <span style={topLineStyle}>Washer 1</span>
                <span style={bottomLineStyle}>Open</span>
            </button>

            <button style={redButtonStyle} className="custom-button">
                <span style={topLineStyle}>Washer 2</span>
                <span style={bottomLineStyle}>Open</span>
            </button>
            <button style={greenButtonStyle} className="custom-button">
                <span style={topLineStyle}>Washer 2</span>
                <span style={bottomLineStyle}>Open</span>
            </button>

            <h3>Dryers</h3>

            <button style={redButtonStyle} className="custom-button">
                <span style={topLineStyle}>Dryer 1</span>
                <span style={bottomLineStyle}>Open</span>
            </button>

            <button style={yellowButtonStyle} className="custom-button">
                <span style={topLineStyle}>Dryer 2</span>
                <span style={bottomLineStyle}>Open</span>
            </button>

            <button style={greenButtonStyle} className="custom-button">
                <span style={topLineStyle}>Dryer 3</span>
                <span style={bottomLineStyle}>Open</span>
            </button>
        </div>
    )
}