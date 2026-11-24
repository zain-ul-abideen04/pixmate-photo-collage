// backend/Routes/socialRoute.js
// Google aur Facebook login ke routes. User MongoDB mein save hota hai.

const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const { sendWelcomeEmail } = require("../Utils/sendEmail");
const { resolveRole } = require("../Middlewares/Auth"); // NEW

const router = express.Router();

// NEW: token mein role nahi, sirf email aur _id (role backend DB se padhta hai)
const makeToken = (user) =>
  jwt.sign(
    { email: user.email, _id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

// Password response mein kabhi nahi bhejna
const safeUser = (user) => {
  const u = user.toObject();
  delete u.password;
  return u;
};

// User dhoondo, warna naya banao (yahin DB mein save hota hai)
async function findOrCreateUser({ provider, providerId, email, name, picture }) {
  const idField = provider === "google" ? "googleId" : "facebookId";

  // 1. Pehle provider id se dhoondo
  let user = await User.findOne({ [idField]: providerId });
  if (user) return { user, isNew: false };

  // 2. Same email ka user pehle se hai? To account link kar do
  if (email) {
    user = await User.findOne({ email });
    if (user) {
      user[idField] = providerId;
      if (!user.picture && picture) user.picture = picture;
      await user.save();
      return { user, isNew: false };
    }
  }

  // 3. Bilkul naya user: DB mein save (role hamesha default "user")
  const created = await User.create({ [idField]: providerId, email, name, picture });
  return { user: created, isNew: true };
}

// ---------- GOOGLE ----------
// POST /backend/google   body: { accessToken }
router.post("/google", async (req, res) => {
  try {
    const { accessToken } = req.body;
    if (!accessToken) {
      return res
        .status(400)
        .json({ success: false, message: "Google token missing" });
    }

    // 1. Check karo ke token tumhari hi app ka hai
    const info = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?access_token=${accessToken}`
    ).then((r) => r.json());

    if (info.aud !== process.env.GOOGLE_CLIENT_ID) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Google token" });
    }

    // 2. Google se user ki info lo
    const p = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((r) => r.json());

    if (!p.sub || !p.email_verified) {
      return res
        .status(400)
        .json({ success: false, message: "Google email is not verified" });
    }

    // 3. DB mein dhoondo ya naya banao
    const { user, isNew } = await findOrCreateUser({
      provider: "google",
      providerId: p.sub,
      email: p.email,
      name: p.name,
      picture: p.picture,
    });

    // Terminal mein dikhega ke data kis database/collection mein gaya
    console.log(
      "USER SAVED:",
      user._id.toString(),
      user.email,
      "| collection:",
      user.collection.name,
      "| database:",
      user.db.name
    );

    // Sirf naye user ko welcome email (purane user ko dobara nahi)
    if (isNew && user.email) {
      sendWelcomeEmail(user.email, user.name).catch((e) =>
        console.log("welcome email failed:", e.message)
      );
    }

    // NEW: role: resolveRole(user)
    res.json({
      success: true,
      token: makeToken(user),
      role: resolveRole(user), // NEW
      user: safeUser(user),
    });
  } catch (err) {
    console.error("google login error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Google login failed",
    });
  }
});

// ---------- FACEBOOK ----------
// POST /backend/facebook   body: { accessToken }
router.post("/facebook", async (req, res) => {
  try {
    const { accessToken } = req.body;
    if (!accessToken) {
      return res
        .status(400)
        .json({ success: false, message: "Facebook token missing" });
    }
    if (!process.env.FB_APP_ID || !process.env.FB_APP_SECRET) {
      return res
        .status(500)
        .json({ success: false, message: "Facebook login is not set up yet" });
    }

    const appToken = `${process.env.FB_APP_ID}|${process.env.FB_APP_SECRET}`;

    // Token verify karo ke yeh tumhari hi app ka hai
    const dbg = await fetch(
      `https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${appToken}`
    ).then((r) => r.json());

    if (!dbg.data?.is_valid || dbg.data.app_id !== process.env.FB_APP_ID) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Facebook token" });
    }

    // Facebook se user ki info lo
    const p = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${accessToken}`
    ).then((r) => r.json());

    if (!p.id) {
      return res
        .status(401)
        .json({ success: false, message: "Could not read Facebook profile" });
    }

    const { user, isNew } = await findOrCreateUser({
      provider: "facebook",
      providerId: p.id,
      email: p.email, // kabhi kabhi undefined hota hai
      name: p.name,
      picture: p.picture?.data?.url,
    });

    console.log(
      "USER SAVED:",
      user._id.toString(),
      user.email,
      "| collection:",
      user.collection.name,
      "| database:",
      user.db.name
    );

    // Sirf naye user ko welcome email (email ho tabhi)
    if (isNew && user.email) {
      sendWelcomeEmail(user.email, user.name).catch((e) =>
        console.log("welcome email failed:", e.message)
      );
    }

    // NEW: role: resolveRole(user)
    res.json({
      success: true,
      token: makeToken(user),
      role: resolveRole(user), // NEW
      user: safeUser(user),
    });
  } catch (err) {
    console.error("facebook login error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Facebook login failed",
    });
  }
});

module.exports = router;