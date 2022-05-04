const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const contentController = require("../controllers/contentController");

router.get("/getContent", contentController.getContent);

router.post(
  "/addContent",
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("content")
      .not()
      .isEmpty()
      .isLength({ min: 50 })
      .withMessage("Content must be at least 50 characters long"),
    body("category").not().isEmpty().withMessage("Category is required"),
  ],
  contentController.addContent
);

module.exports = router;
