const Category = require("../models/Category");

module.exports.addCategory = async (req, res) => {
  try {
    const { title, id } = req.body;
    const newCategory = new Category({
      title,
      id,
    });
    await newCategory.save();
    res.status(200).json({
      message: "Category added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.getCategories = async (_req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      categories,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
