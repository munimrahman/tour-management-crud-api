exports.getTours = (req, res, next) => {
  console.log("Hello From Get Tours Route");
  res.send("Hello From Get Tours Route");
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

exports.createTours = (req, res, next) => {
  console.log("Hello From Post Tours Route");
  res.send("Hello From Post Tours Route");
};

exports.updateTours = (req, res, next) => {
  console.log("Hello From Update Tours Route");
  res.send("Hello From Update Tours Route");
};

exports.deleteTours = (req, res, next) => {
  console.log("Hello From Delete Tours Route");
  res.send("Hello From Delete Tours Route");
};
