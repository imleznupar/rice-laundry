
import './home.css'
export default function Lovett() {
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
            <form action="/action_page.php">
                <label for="res coll">Residential College:</label>
                <select name="res coll" id="res coll">
                    <option value="baker">Baker</option>
                    <option value="will rice">Will Rice</option>
                    <option value="hanszen">Hanszen</option>
                    <option value="wiess">Wiess</option>
                    <option value="jones">Jones</option>
                    <option value="brown">Brown</option>
                    <option value="lovett">Lovett</option>
                    <option value="sid richardson">Sid Richardson</option>
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