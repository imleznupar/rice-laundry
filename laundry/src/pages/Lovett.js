
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
                    <span class="machine-status">12:30 left</span>
                </button>

                <button style={redButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Washer 2</span>
                    <span class="machine-status">Unavailable</span>
                </button>
                <button style={greenButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Washer 2</span>
                    <span class="machine-status">Open</span>
                </button>
                
                <h3>Dryers</h3>

                <button style={redButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Dryer 1</span>
                    <span class="machine-status">Unavailable</span>
                </button>

                <button style={yellowButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Dryer 2</span>
                    <span class="machine-status">30:00 left</span>
                </button>

                <button style={greenButtonStyle} className="custom-button">
                    <span class="machine-name" className="machine-name">Dryer 3</span>
                    <span class="machine-status">Available</span>
                </button>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}