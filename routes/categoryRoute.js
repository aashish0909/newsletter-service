const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const categoryController = require("../controllers/categoryController");

router.get("/getCategories", categoryController.getCategories);

router.post(
  "/addCategory",
  [body("title").not().isEmpty().withMessage("Title is required")],
  categoryController.addCategory
);

module.exports = router;
