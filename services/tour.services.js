const Tour = require("../models/Tour");

exports.getToursServices = async () => {
  const tours = await Tour.find({});
  const count = await Tour.countDocuments();
  return { tours, count };
};

exports.createTourServices = async (data) => {
  //   const result = await Tour.create(data);
  const tour = new Tour(data);
  const result = await tour.save();
  return result;
};
