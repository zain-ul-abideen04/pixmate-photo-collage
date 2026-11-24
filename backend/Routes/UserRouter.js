const router = require('express').Router();
const { ensureAuthenticated, ensureRole } = require('../Middlewares/Auth');
const { uploadAvatar, cleanupOnError } = require('../Middlewares/upload');
const { getMe, getUsers, updateUser, deleteUser, updateMyPhoto } = require('../Controllers/UserController.js'); // NEW: updateMyPhoto

// NEW: login karne wale ka apna role (koi bhi logged in user)
router.get('/me', ensureAuthenticated, getMe);

// NEW: apni photo badalna (koi bhi logged in user, sirf apni). '/:id' se PEHLE rakho
router.put('/me/photo', ensureAuthenticated, uploadAvatar, cleanupOnError, updateMyPhoto);

// Users ki list: admin aur manager
router.get('/', ensureAuthenticated, ensureRole('admin', 'manager', 'support', 'viewer'), getUsers);

// Edit: admin aur manager (role badalna sirf admin, controller mein check hai)
router.put('/:id', ensureAuthenticated, ensureRole('admin', 'manager'), uploadAvatar, cleanupOnError, updateUser);

// Delete: sirf admin
router.delete('/:id', ensureAuthenticated, ensureRole('admin'), deleteUser);

module.exports = router;