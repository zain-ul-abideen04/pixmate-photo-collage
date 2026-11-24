const PageContent = require("../Models/pageContent");

const NAV_SLUG = "_navbar";

// Database mein list na ho to ye 6 default pages dikhte hain
const DEFAULT_ITEMS = [
  { slug: "editing-tools", title: "Editing Tools", visible: true },
  { slug: "templates", title: "Templates", visible: true },
  { slug: "design-library", title: "Design Library", visible: true },
  { slug: "enterprise", title: "Enterprise", visible: true },
  { slug: "learning-support", title: "Learning & Support", visible: true },
  { slug: "pricing", title: "Pricing", visible: true },
];

// Ye naam naye page ke slug nahi ban sakte (routes se takrao)
const RESERVED = [
  "login", "signup", "forgot-password", "reset-password", "uploads",
  "backend", "api", "admin", "_next", "home", "_navbar",
];

// NEW: sirf wohi pages add ho sakte hain jo frontend code mein bane hue hain
// (naya page code mein banao to uska slug yahan DEFAULT_ITEMS mein bhi jodo)
const KNOWN_SLUGS = DEFAULT_ITEMS.map((i) => i.slug);

const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function loadItems() {
  const doc = await PageContent.findOne({ slug: NAV_SLUG });
  if (doc && doc.content && Array.isArray(doc.content.items)) return doc.content.items;
  return DEFAULT_ITEMS.map((i) => ({ ...i }));
}

async function saveItems(items) {
  await PageContent.findOneAndUpdate(
    { slug: NAV_SLUG },
    { content: { items } },
    { upsert: true, new: true }
  );
}

// Public: navbar sirf visible pages mangta hai
const getNav = async (req, res) => {
  try {
    const items = (await loadItems()).filter((i) => i.visible !== false);
    res.status(200).json({ success: true, items });
  } catch (err) {
    console.log("getNav error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Admin: saare pages (hidden bhi)
const manageNav = async (req, res) => {
  try {
    res.status(200).json({ success: true, items: await loadItems() });
  } catch (err) {
    console.log("manageNav error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// NEW: Admin: page wapas menu mein lana (sirf code mein bane hue pages)
const addPage = async (req, res) => {
  try {
    const title = String(req.body.title || "").trim();
    const slug = slugify(req.body.slug); // "/templates" ya "templates" dono chalte hain
    if (!title || !slug) {
      return res.status(400).json({ success: false, message: "Name and link are required" });
    }
    if (RESERVED.includes(slug)) {
      return res.status(400).json({ success: false, message: `"${slug}" is a reserved name` });
    }
    if (!KNOWN_SLUGS.includes(slug)) {
      return res.status(400).json({
        success: false,
        message: `Link "/${slug}" website ke code mein nahi hai. Ye links chalte hain: ${KNOWN_SLUGS.map((s) => "/" + s).join(", ")}`,
      });
    }

    const items = await loadItems();
    if (items.some((i) => i.slug === slug)) {
      return res.status(409).json({ success: false, message: "Ye page pehle se menu mein hai" });
    }

    items.push({ slug, title, visible: true });
    await saveItems(items);

    res.status(201).json({ success: true, message: "Page added", items });
  } catch (err) {
    console.log("addPage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Admin: naam badalna / dikhana-chhupana
const updatePage = async (req, res) => {
  try {
    const items = await loadItems();
    const item = items.find((i) => i.slug === req.params.slug);
    if (!item) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }
    if (typeof req.body.title === "string" && req.body.title.trim()) {
      item.title = req.body.title.trim();
    }
    if (typeof req.body.visible === "boolean") item.visible = req.body.visible;

    await saveItems(items);
    res.status(200).json({ success: true, message: "Page updated", items });
  } catch (err) {
    console.log("updatePage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// NEW: Admin: page ko menu se hatao (page ka text database mein rehta hai,
// taake wapas add karne par purana text mil jaye)
const deletePage = async (req, res) => {
  try {
    const items = await loadItems();
    if (!items.some((i) => i.slug === req.params.slug)) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }
    const left = items.filter((i) => i.slug !== req.params.slug);
    await saveItems(left);

    res.status(200).json({ success: true, message: "Page removed from menu", items: left });
  } catch (err) {
    console.log("deletePage error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { getNav, manageNav, addPage, updatePage, deletePage };