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

exports.getToursById = async (req, res, next) => {
  try {
    const tour = await tourServices.getTourByIdServices(req.params.id);
    res.status(200).send({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};

exports.getTrendingTours = async (req, res, next) => {
  try {
    const trendingTours = await tourServices.getTrendingTourServices();
    res.status(200).send({
      status: "success",
      data: trendingTours,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};

exports.getCheapestTours = async (req, res, next) => {
  try {
    const cheapestTours = await tourServices.getCheapestTourServices();
    res.status(200).send({
      status: "success",
      data: cheapestTours,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
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

exports.updateTours = async (req, res, next) => {
  try {
    const result = await tourServices.updateTourServices(
      req.params.id,
      req.body
    );
    res.status(200).send({
      status: "success",
      message: "Data updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};

exports.deleteTours = (req, res, next) => {
  console.log("Hello From Delete Tours Route");
  res.send("Hello From Delete Tours Route");
};
