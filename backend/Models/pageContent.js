const mongoose = require("mongoose");

const PageContentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true }, // "pricing", "templates", ...
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pagecontents", PageContentSchema);