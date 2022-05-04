const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Content = mongoose.model("content", ContentSchema);
