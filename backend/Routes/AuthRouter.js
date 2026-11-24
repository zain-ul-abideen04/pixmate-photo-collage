const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { signup, login, forgotPassword, resetPassword } = require('../Controllers/AuthController');
const { uploadAvatar, cleanupOnError } = require('../Middlewares/upload');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', uploadAvatar, cleanupOnError, signupValidation, signup);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;