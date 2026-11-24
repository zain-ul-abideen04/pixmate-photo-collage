const router = require("express").Router();
const { ensureAuthenticated, ensureRole } = require("../Middlewares/Auth"); // NEW: ensureRole (ensurePageEditor ab nahi hai)
const { getNav, manageNav, addPage, updatePage, deletePage } = require("../Controllers/navController");
console.log("DEBUG:", typeof ensureAuthenticated, typeof ensureRole, typeof getNav, typeof manageNav, typeof addPage, typeof updatePage, typeof deletePage);

// NEW: menu (naam, dikhana/chhupana) admin + manager; page add/delete sirf admin
router.get("/", getNav);                                                                 // public (navbar)
router.get("/manage", ensureAuthenticated, ensureRole("admin", "manager", "viewer"), manageNav);   // admin + manager
router.post("/pages", ensureAuthenticated, ensureRole("admin"), addPage);                // sirf admin
router.patch("/pages/:slug", ensureAuthenticated, ensureRole("admin", "manager"), updatePage); // admin + manager
router.delete("/pages/:slug", ensureAuthenticated, ensureRole("admin"), deletePage);     // sirf admin

module.exports = router;