import Header from "../components/Header"
const client = require("../dbConnection"); // Import your MongoDB connection

export default function Test() {
    
    return (
        <>
            <Header />
            <h2>Test</h2>
        </>
    )
}