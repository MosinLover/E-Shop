const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    path: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchema);