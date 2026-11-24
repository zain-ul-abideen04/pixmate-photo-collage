// backend/Middlewares/Upload.js
// Profile picture upload (multer). File backend/uploads/ folder mein save hoti hai.

const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const uploadDir = path.join(__dirname, "..", "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

// Sirf yeh image types allowed hain
const allowed = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  // Asli naam use nahi karte, random naam banate hain (security ke liye)
  filename: (req, file, cb) => {
    const ext = allowed[file.mimetype];
    cb(null, crypto.randomBytes(16).toString("hex") + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (!allowed[file.mimetype]) {
    return cb(new Error("Only JPG, PNG or WEBP images are allowed"));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
});

// Form field ka naam "avatar" hai. Error ho to JSON mein wapas bhejta hai.
function uploadAvatar(req, res, next) {
  upload.single("avatar")(req, res, (err) => {
    if (err) {
      const message =
        err.code === "LIMIT_FILE_SIZE"
          ? "Image must be 2MB or smaller"
          : err.message;
      return res.status(400).json({ success: false, message });
    }
    next();
  });
}

// Agar upload ke baad aage controller mein error aaye (ya response fail ho),
// to upload hui photo delete kar do taake uploads/ folder mein kachra na bane.
function cleanupOnError(req, res, next) {
  res.on("finish", () => {
    if (req.file && res.statusCode >= 400) {
      fs.unlink(req.file.path, () => {});
    }
  });
  next();
}

module.exports = { uploadAvatar, cleanupOnError, uploadDir };