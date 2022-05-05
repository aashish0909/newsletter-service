const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const userController = require("../controllers/userController");

router.get("/getUsersbyTopic", userController.getUsersbyTopic);

router.get("/getUsers", userController.getUsers);

router.post(
  "/addUser",
  [
    body("email").not().isEmpty().withMessage("Email is required"),
    body("topics").not().isEmpty().withMessage("Atleast one topic is required"),
  ],
  userController.addUser
);

module.exports = router;
