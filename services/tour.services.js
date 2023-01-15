const Tour = require("../models/Tour");

exports.getToursServices = async () => {
  const tours = await Tour.find();
  const count = await Tour.countDocuments();
  return { tours, count };
};

exports.getTourByIdServices = async (tourId) => {
  const viewPlus = await Tour.findOneAndUpdate(
    { _id: tourId },
    { $inc: { views: 1 } }
  );
  const tour = await Tour.findById(tourId);
  return tour;
};

exports.getCheapestTourServices = async () => {
  const tour = await Tour.find().sort({ price: 1 }).limit(3);
  return tour;
};

exports.getTrendingTourServices = async () => {
  const tour = await Tour.find().sort({ views: -1 }).limit(3);
  return tour;
};

exports.createTourServices = async (data) => {
  //   const result = await Tour.create(data);
  const tour = new Tour(data);
  const result = await tour.save();
  return result;
};

exports.updateTourServices = async (id, data) => {
  const result = await Tour.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};

exports.deleteTourServices = async (id, data) => {
  const result = await Tour.deleteOne({ _id: id });
  return result;
};
