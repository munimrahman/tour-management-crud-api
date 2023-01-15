const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 8000;

// database connection
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Database Connection Successful Established".green.bold);
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`.yellow.bold);
});
