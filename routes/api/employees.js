const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT")
employeesController = require("../../controllers/employeesController");

router
  .route("/")
  .get(verifyJWT, employeesController.getEmployee)
  .post(employeesController.createNewEmployee)

  .put(employeesController.updateEmployee)

  .delete(employeesController.deleteEmployee)

router.route("/:id")
  .get(employeesController.getEmployee)

module.exports = router