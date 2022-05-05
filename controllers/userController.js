const User = require("../models/User");
const Category = require("../models/Category");

module.exports.addUser = async (req, res) => {
  try {
    const { email, topics } = req.body;

    const newTopics = [];
    for (const element of topics) {
      const newCat = await Category.findOne({ id: element });
      if (newCat) newTopics.push(newCat._id.toString());
      else {
        throw new Error("Topic with id " + element + " not found");
      }
    }

    const newUser = new User({
      email,
      topics: newTopics,
    });

    await newUser.save();

    res.status(200).json({
      message: "User added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.getUsersbyTopic = async (req, res) => {
  try {
    const { topic } = req.body;

    const newTopics = [];
    for (const element of topic) {
      const newCat = await Category.findOne({ id: element });
      if (newCat) newTopics.push(newCat._id.toString());
      else {
        throw new Error("Topic with id " + element + " not found");
      }
    }

    const users = await User.find({
      topics: { $all: newTopics },
    }).populate("topics", "title -_id");

    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find().populate("topics", "title -_id");

    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
