const router = require("express").Router();
const { ensureAuthenticated, ensureRole } = require("../Middlewares/Auth"); // NEW: ensureRole
const { getPage, savePage, deletePage } = require("../Controllers/pageController");

router.get("/:slug", getPage); // public (frontend ke liye)

// NEW: page ka text edit: admin aur manager
router.put("/:slug", ensureAuthenticated, ensureRole("admin", "manager", "editor"), savePage);

// NEW: page delete / reset: sirf admin
router.delete("/:slug", ensureAuthenticated, ensureRole("admin"), deletePage);

module.exports = router;