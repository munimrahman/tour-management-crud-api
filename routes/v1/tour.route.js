const express = require("express");
const router = express.Router();
const tourController = require("../../controllers/tour.controller");

router.route("/trending").get(tourController.getTrendingTours);
router.route("/cheapest").get(tourController.getCheapestTours);

router.route("/").get(tourController.getTours).post(tourController.createTours);

router
  .route("/:id")
  .get(tourController.getToursById)
  .patch(tourController.updateTours)
  .delete(tourController.deleteTours);

module.exports = router;
