const tourServices = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const tours = await tourServices.getToursServices();
    res.status(200).send({
      status: "success",
      count: tours.count,
      data: tours.tours,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};

exports.getToursById = (req, res, next) => {
  console.log("Hello From Get Tours By ID Route");
  res.send("Hello From Get Tours By ID Route");
};

exports.getTrendingTours = (req, res, next) => {
  console.log("Hello From Get Trending Tours Route");
  res.send("Hello From Get Trending Tours Route");
};

exports.getCheapestTours = (req, res, next) => {
  console.log("Hello From Get Cheapest Tours Route");
  res.send("Hello From Get Cheapest Tours Route");
};

// Create a new tour package
exports.createTours = async (req, res, next) => {
  try {
    const result = await tourServices.createTourServices(req.body);
    res.status(200).send({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: "failed",
      message: error.message,
    });
  }
};

exports.updateTours = (req, res, next) => {
  console.log("Hello From Update Tours Route");
  res.send("Hello From Update Tours Route");
};

exports.deleteTours = (req, res, next) => {
  console.log("Hello From Delete Tours Route");
  res.send("Hello From Delete Tours Route");
};
