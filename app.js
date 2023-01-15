const express = require("express");
const cors = require("cors");
const tourRouter = require("./routes/v1/tour.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/tours", tourRouter);

app.get("/", (req, res) => {
  console.log("Hello from server.");
  res.send("Hello from server.");
});

app.all("*", (req, res) => {
  res.send("ERROR! Route Not Found");
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

module.exports = app;
