const express = require("express");
const router = express.Router();

employeesController = require("../../controllers/employeesController");

router
  .route("/")
  .get(employeesController.getEmployee)
  .post(employeesController.createNewEmployee)

  .put(employeesController.updateEmployee)

  .delete(employeesController.deleteEmployee)

router.route("/:id")
  .get(employeesController.getEmployee)

module.exports = router