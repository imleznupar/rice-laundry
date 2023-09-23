
import './college.css'

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
       
        
        
    };

    const bottomLineStyle = {
        
    }
    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap" rel="stylesheet"/>
            </head>
            <img class = "logo" src="../../logo.jpg"></img>
        <body>

        <div class="container">
            <div class = "header">
                <h2 class="title">Lovett's Laundry Room</h2>
                <a class="log" href="https://google.com">
                    <h4>where's my laundry?</h4>
                </a>
            </div>

            <div class="body">

                <div class="content">
                <h3 class="subtitle">Washers</h3>
                
                <button style={yellowButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Washer 1</span>
                    <span class="machine-status">Open</span>
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
            </div>
        </div>
        </body>
        </html>
    )
}