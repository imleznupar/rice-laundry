
import './changestatus.css'
export default function changestatus() {

    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap" rel="stylesheet"/>
            </head>

            <div class = "center">
            <img class = "lovett-logo" src="../../logos/Lovett\ Logo.jpeg"/>
            <h2>Washer 1</h2>
            <form action="/action_page.php">
                <label for="changestatus">Change Status:</label>
                <select name="changestatus" id="changestatus">
                    <option value="Open">Open</option>
                    <option value="In Use">In Use</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <br></br>
                    <input class = "button1" type="submit" value="Change!"></input>
                
                    </form>
                    <form action="/action_page.php">
                <label for="changestatus">Move To:</label>
                <select name="changestatus" id="changestatus">
                    <option value="Open">Dryer 1</option>
                    <option value="In Use">Dryer 2</option>
                    <option value="Unavailable">Dryer 3</option>
                </select>
                <br></br>
                    <input class = "button2" type="submit" value="Change!"></input>
                    
            </form>
            </div>
        </html>
    )
}