const jwt = require('jsonwebtoken');
const User = require('../Models/user'); // NEW (chhota u)

// Login ka token check karta hai
const ensureAuthenticated = (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header) {
        return res.status(403).json({
            message: 'Token is required',
            success: false
        });
    }
    const token = header.startsWith('Bearer ') ? header.slice(7) : header;
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        console.log('JWT verify failed:', err.message);
        return res.status(403).json({
            message: 'Token is invalid or expired',
            success: false
        });
    }
};

// NEW: .env ke ADMIN_EMAILS ki list (pehla admin bootstrap)
const getAdminEmails = () =>
    (process.env.ADMIN_EMAILS || '')
        .split(',')
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean);

// NEW: user document se asli role nikalta hai
// ADMIN_EMAILS wali email hamesha admin, warna DB ka role, warna "user"
const resolveRole = (user) => {
    if (!user) return 'user';
    const email = (user.email || '').toLowerCase();
    if (getAdminEmails().includes(email)) return 'admin';
    if (['user', 'manager', 'admin', 'editor', 'support', 'viewer'].includes(user.role)) return user.role;
    return 'user';
};

// NEW: DB se role padh kar check karta hai (token ke role par bharosa nahi)
// Istemal: ensureRole('admin') ya ensureRole('admin', 'manager')
const ensureRole = (...allowed) => async (req, res, next) => {
    try {
        // Pehle token se login check
        let tokenError = null;
        if (!req.user) {
            ensureAuthenticated(req, res, () => {});
            if (!req.user) tokenError = true;
        }
        if (tokenError) return; // ensureAuthenticated jawab bhej chuka

        let dbUser = null;
        if (req.user._id) dbUser = await User.findById(req.user._id);
        if (!dbUser && req.user.email) {
            dbUser = await User.findOne({ email: req.user.email });
        }
        if (!dbUser) {
            return res.status(403).json({
                message: 'User not found',
                success: false
            });
        }

        const role = resolveRole(dbUser);
        if (!allowed.includes(role)) {
            return res.status(403).json({
                message: 'You do not have permission for this action',
                success: false
            });
        }
        req.dbUser = dbUser;
        req.role = role;
        next();
    } catch (err) {
        console.log('ensureRole error:', err.message);
        return res.status(500).json({
            message: 'Server error',
            success: false
        });
    }
};

// NEW: ensureAdmin ab ensureRole('admin') hai (pehle sirf ADMIN_EMAILS dekhta tha)
const ensureAdmin = ensureRole('admin');

module.exports = { ensureAuthenticated, ensureAdmin, ensureRole, resolveRole };