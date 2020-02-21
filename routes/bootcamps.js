const express = require("express");
const router = express.Router();
const {
  getAllBootcamps,
  getBootcamp,
  CreateBootcamp,
  UpdateBootcamp,
  DeleteBootcamp
} = require("../controllers/bootcamps");

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
