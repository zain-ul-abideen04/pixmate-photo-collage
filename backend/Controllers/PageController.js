const PageContent = require("../Models/pageContent");

// Public: frontend (3000) isay use karta hai
const getPage = async (req, res) => {
  try {
    const page = await PageContent.findOne({ slug: req.params.slug });
    res.status(200).json({ success: true, content: page ? page.content : null });
  } catch (err) {
    console.log("getPage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Admin: save / update
const savePage = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || typeof content !== "object") {
      return res.status(400).json({ success: false, message: "Content is required" });
    }
    await PageContent.findOneAndUpdate(
      { slug: req.params.slug },
      { content },
      { upsert: true, new: true }
    );
    res.status(200).json({ success: true, message: "Page updated" });
  } catch (err) {
    console.log("savePage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Admin: badla hua content hatao, page default text par wapas
const deletePage = async (req, res) => {
  try {
    await PageContent.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json({ success: true, message: "Page reset to default" });
  } catch (err) {
    console.log("deletePage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { getPage, savePage, deletePage };