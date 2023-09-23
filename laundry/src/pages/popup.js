import Header from "../components/Header"

export default function Lovett() {
    return (
        <>
            <Header />
            <h2>Lovett</h2>
            <body>
                <div class="box">
                    <a href="#popup-box">
                        Washer 1
                    </a>
                </div>
                <div id="popup-box" class="modal">
                <img src="public/logos/Lovett\ Logo.jpeg" alt="logo" />
                    <div class="content">
                        <h1 style="color: green;">
                            Washer 1
                        </h1>
                        <b>
                            <form action="/action_page.php">
                    <label for="status">Change Status:</label>
                    <select name="status" id="status">
                        <option value="Open">Open</option>
                        <option value="In Use">In Use</option>
                        <option value="Unavalible">Unavalible</option>
                        </select>
                        </form>
                        </b>
                        <a href="#"
                        class="box-close">
                            ×
                        </a>
                    </div>
                </div>
            </body>



        </>
    )
}