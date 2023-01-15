const Tour = require("../models/Tour");

exports.getToursServices = async () => {
  const tours = await Tour.find();
  return tours;
};

exports.postToursServices = async (data) => {
  const result = await Tour.create(data);
  return result;
};
