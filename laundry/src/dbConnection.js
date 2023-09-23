const { MongoClient } = require("mongodb");

// Connection URI and Database Name
const uri = "mongodb+srv://leznupar:jasminelu1123@cluster0.cfpytk4.mongodb.net/"; // Replace with your MongoDB server URI
const dbName = "test"; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = client; // Export the client for use in other modules
