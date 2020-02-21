const express = require("express");
const router = express.Router();
const {
  getAllBootcamps,
  getBootcamp,
  CreateBootcamp,
  UpdateBootcamp,
  DeleteBootcamp,
  getBootcampsInRadius
} = require("../controllers/bootcamps");

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);
router
  .route("/")
  .get(getAllBootcamps)
  .post(CreateBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(UpdateBootcamp)
  .delete(DeleteBootcamp);

module.exports = router;
