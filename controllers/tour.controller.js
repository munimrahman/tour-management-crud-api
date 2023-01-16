const tourServices = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const query = req.query;
    const queries = {};
    // const filters = { ...req.query };
    // { fields: 'name,image', sort: 'name,price', page: '1', limit: '3' }
    // const excludeFields = ["sort", "page", "limit"];
    // excludeFields.forEach((field) => delete filters[field]);
    // console.log(filters);
    // { fields: 'name,image' }
    if (query.fields) {
      const fields = query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (query.sort) {
      const sortBy = query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    // pagination
    const { page = 1, limit = 3 } = query;
    const skip = (page - 1) * limit;
    queries.skip = skip;
    queries.limit = limit;

    const tours = await tourServices.getToursServices(queries);
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

exports.deleteTours = async (req, res, next) => {
  try {
    const result = await tourServices.deleteTourServices(req.params.id);
    res.status(200).send({
      status: "success",
      message: "Data Deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};
