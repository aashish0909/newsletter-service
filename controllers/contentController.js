const Content = require("../models/Content");

module.exports.addContent = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newContent = new Content({
      title,
      content,
      category,
    });

    await newContent.save();

    res.status(200).json({
      message: "Content added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.getContent = async (_req, res) => {
  try {
    const contents = await Content.find().populate("category", "title -_id");

    res.status(200).json({
      contents,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
