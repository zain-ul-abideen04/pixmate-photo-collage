const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const UserModel = require('../Models/user');
const { resolveRole } = require('../Middlewares/Auth');

// backend/uploads folder (yahan local photos save hoti hain)
const uploadDir = path.join(__dirname, '..', 'uploads');

// NEW: jo roles allowed hain
const VALID_ROLES = ['user', 'manager', 'admin', 'editor', 'support', 'viewer'];

// Local photo file delete karna. Google ki photo (http link) ko haath nahi lagate.
const removeLocalPicture = (picture) => {
    if (typeof picture === 'string' && picture.startsWith('/uploads/')) {
        const filePath = path.join(uploadDir, path.basename(picture));
        fs.unlink(filePath, () => {});
    }
};

// NEW: token wale user ki id (normal token mein _id, Google token mein id)
const tokenUserId = (req) => String((req.user && (req.user._id || req.user.id)) || '');

// NEW: logged in banday ka role. Auth.js ka ensureRole ise req.role (aur req.userRole) mein rakhta hai
const callerRole = (req) => req.userRole || req.role || '';

// NEW: login karne wale ki apni info aur role (dashboard isi se role janta hai)
const getMe = async (req, res) => {
    try {
        const id = tokenUserId(req);
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(401).json({
                message: 'Please login again',
                success: false
            });
        }
        const user = await UserModel.findById(id).select('-password');
        if (!user) {
            return res.status(401).json({
                message: 'User not found, please login again',
                success: false
            });
        }
        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                role: resolveRole(user)
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

// Saare users ki list (password ke baghair)
const getUsers = async (req, res) => {
    try {
        const found = await UserModel.find().select('-password').sort({ _id: -1 });
        // NEW: har user ke saath uska asli role (ADMIN_EMAILS wale admin dikhen)
        const users = found.map((u) => {
            const obj = u.toObject();
            obj.role = resolveRole(u);
            return obj;
        });
        res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

// Ek user update karna (naam, email, photo, role)
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: 'Invalid user id',
                success: false
            });
        }

        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }

        const targetRole = resolveRole(user);
        const myRole = callerRole(req); // NEW

        // NEW: manager kisi admin ko edit nahi kar sakta
        if (myRole === 'manager' && targetRole === 'admin') {
            return res.status(403).json({
                message: 'A manager cannot edit an admin',
                success: false
            });
        }

        const name = typeof req.body.name === 'string' ? req.body.name.trim() : user.name;
        const email = typeof req.body.email === 'string' ? req.body.email.trim() : user.email;

        if (name.length < 2) {
            return res.status(400).json({
                message: 'Name must be at least 2 characters',
                success: false
            });
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({
                message: 'Enter a valid email address',
                success: false
            });
        }

        // Email badli hai to check karo ke kisi aur ke paas pehle se na ho
        if (email !== user.email) {
            const exists = await UserModel.findOne({ email, _id: { $ne: id } });
            if (exists) {
                return res.status(409).json({
                    message: 'This email is already used by another user',
                    success: false
                });
            }
        }

        // NEW: role badalna (sirf admin)
        let newRole = null;
        if (typeof req.body.role === 'string' && req.body.role !== '' && req.body.role !== targetRole) {
            if (myRole !== 'admin') {
                return res.status(403).json({
                    message: 'Only an admin can change roles',
                    success: false
                });
            }
            if (!VALID_ROLES.includes(req.body.role)) {
                return res.status(400).json({
                    message: 'Invalid role',
                    success: false
                });
            }
            if (tokenUserId(req) === id) {
                return res.status(400).json({
                    message: 'You cannot change your own role',
                    success: false
                });
            }
            // ADMIN_EMAILS wale hamesha admin rehte hain
            if (resolveRole({ email: user.email, role: 'user' }) === 'admin') {
                return res.status(400).json({
                    message: 'This user is an admin through ADMIN_EMAILS, remove the email there to change the role',
                    success: false
                });
            }
            newRole = req.body.role;
        }

        const oldPicture = user.picture;
        const removePicture = req.body.removePicture === 'true';

        user.name = name;
        user.email = email;
        if (newRole) user.role = newRole;

        if (req.file) {
            user.picture = `/uploads/${req.file.filename}`;
        } else if (removePicture) {
            user.picture = undefined;
        }

        await user.save();

        // Photo badli ya hata di gayi hai to purani local file delete karo
        if (req.file || removePicture) {
            removeLocalPicture(oldPicture);
        }

        const safeUser = user.toObject();
        delete safeUser.password;
        safeUser.role = resolveRole(user);

        res.status(200).json({
            message: 'User updated',
            success: true,
            user: safeUser
        });
    } catch (err) {
        console.log(err);
        if (err && err.code === 11000) {
            return res.status(409).json({
                message: 'This email is already used by another user',
                success: false
            });
        }
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

// NEW: login wala banda sirf apni photo badle (naam, email, role kuch nahi)
const updateMyPhoto = async (req, res) => {
    try {
        const id = tokenUserId(req);
        if (!id || !mongoose.isValidObjectId(id)) {
            return res.status(401).json({
                message: 'Please login again',
                success: false
            });
        }
        if (!req.file) {
            return res.status(400).json({
                message: 'Please choose a photo',
                success: false
            });
        }
        const user = await UserModel.findById(id);
        if (!user) {
            removeLocalPicture(`/uploads/${req.file.filename}`);
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }

        const oldPicture = user.picture;
        user.picture = `/uploads/${req.file.filename}`;
        await user.save();
        removeLocalPicture(oldPicture);

        res.status(200).json({
            message: 'Photo updated',
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                role: resolveRole(user)
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

// Ek user delete karna (sirf admin, route par ensureRole('admin') lagta hai)
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: 'Invalid user id',
                success: false
            });
        }
        if (tokenUserId(req) === id) {
            return res.status(400).json({
                message: 'You cannot delete your own account',
                success: false
            });
        }
        const deleted = await UserModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }

        // User ki local photo bhi delete karo
        removeLocalPicture(deleted.picture);

        res.status(200).json({
            message: 'User deleted',
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

module.exports = { getMe, getUsers, updateUser, deleteUser, updateMyPhoto }; // NEW: updateMyPhoto