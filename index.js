const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000; // Ensure this matches your environment variable
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
// Connect to the database

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Basic route

//Api
app.use("/api/user", authRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
