import Header from "../components/Header"

export default function Lovett() {
    return (
        <>
            <Header />
            <h2>Welcome to Laundry @ Rice</h2>
            <img src="Rice Laundry Logo" alt="logo" />
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
                    <input type="submit" value="START!"></input>
                    </form>
                    

                </>
                    )
}