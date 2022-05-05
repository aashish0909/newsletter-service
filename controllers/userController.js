const User = require("../models/User");
const Category = require("../models/Category");

module.exports.addUser = async (req, res) => {
  try {
    const { name, email, topics } = req.body;

    let user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ message: "This email has already been subscribed" });
    }

    const newTopics = [];
    for (const element of topics) {
      const newCat = await Category.findOne({ id: element });
      if (newCat) newTopics.push(newCat._id.toString());
      else {
        throw new Error("Topic with id " + element + " not found");
      }
    }

    const newUser = new User({
      name,
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

module.exports.getUsersbyTopic = async ({ newCategory }) => {
  return User.find({
    topics: { $all: newCategory },
  })
    .populate("topics", "title -_id")
    .select("email name -_id -topics");
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
