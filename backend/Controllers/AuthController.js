const { sendWelcomeEmail, sendResetEmail } = require("../Utils/sendEmail");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/user");
const PasswordReset = require("../Models/passwordReset");
const { resolveRole } = require('../Middlewares/Auth'); // NEW: user ka role pata karne ke liye

// reCAPTCHA check (signup aur login dono use karte hain)
const verifyCaptcha = async (captchaToken) => {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: captchaToken
        })
    });
    const verifyData = await verifyRes.json();
    console.log('captcha verify:', verifyData);
    return verifyData.success;
};

// Signup fail ho to upload hui photo delete kar do
const removeUploadedFile = (req) => {
    if (req.file) {
        fs.unlink(req.file.path, () => {});
    }
};

const signup = async (req, res) => {
    try {
        const { name, email, password, captchaToken } = req.body;

        if (!captchaToken) {
            removeUploadedFile(req);
            return res.status(400).json({
                message: 'Please complete the captcha',
                success: false
            });
        }
        if (!(await verifyCaptcha(captchaToken))) {
            removeUploadedFile(req);
            return res.status(400).json({
                message: 'Captcha verification failed, try again',
                success: false
            });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            removeUploadedFile(req);
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Photo ho to uska path, warna khali
        const picture = req.file ? `/uploads/${req.file.filename}` : "";

        const userModel = new UserModel({ name, email, password, picture });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        sendWelcomeEmail(email, name).catch((err) =>
            console.log("welcome email failed:", err.message)
        );
        res.status(201).json({
            message: "Signup successfully",
            success: true
        });
    } catch (err) {
        console.log("signup error:", err);
        removeUploadedFile(req);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, captchaToken } = req.body;

        if (!captchaToken) {
            return res.status(400).json({
                message: 'Please complete the captcha',
                success: false
            });
        }
        if (!(await verifyCaptcha(captchaToken))) {
            return res.status(400).json({
                message: 'Captcha verification failed, try again',
                success: false
            });
        }

        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email and password is wrong';
        if (!user) {
            return res.status(409).json({
                message: errorMsg,
                success: false
            });
        }

        // NEW: Google/Facebook se bane user ka password nahi hota (warna bcrypt crash karta)
        if (!user.password) {
            return res.status(403).json({
                message: 'This account was created with Google or Facebook, please use that button to login',
                success: false
            });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.status(200).json({
            message: "login success",
            success: true,
            jwtToken,
            email,
            name: user.name,
            picture: user.picture || "",
            role: resolveRole(user) // NEW
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Step 1: user email deta hai, usay reset link email mein jata hai
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                message: 'Email is required',
                success: false
            });
        }

        const genericMsg = 'If an account exists for this email, a reset link has been sent.';
        const user = await UserModel.findOne({ email });

        if (user) {
            const token = crypto.randomBytes(32).toString('hex');
            const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

            await PasswordReset.deleteMany({ email });
            await PasswordReset.create({
                email,
                tokenHash,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000)
            });

            const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
            const link = `${clientUrl}/reset-password/${token}`;

            sendResetEmail(email, user.name, link).catch((err) =>
                console.log('reset email failed:', err.message)
            );
        } else {
            console.log('forgot-password: no user found for', email);
        }

        res.status(200).json({
            message: genericMsg,
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Step 2: user email wale link se naya password rakhta hai
const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;
        if (!token || !password) {
            return res.status(400).json({
                message: 'Token and new password are required',
                success: false
            });
        }
        if (password.length < 8) {
            return res.status(400).json({
                message: 'Password must be at least 8 characters',
                success: false
            });
        }

        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const record = await PasswordReset.findOne({
            tokenHash,
            expiresAt: { $gt: new Date() }
        });
        if (!record) {
            return res.status(400).json({
                message: 'Reset link is invalid or has expired',
                success: false
            });
        }

        const user = await UserModel.findOne({ email: record.email });
        if (!user) {
            return res.status(400).json({
                message: 'Reset link is invalid or has expired',
                success: false
            });
        }

        user.password = await bcrypt.hash(password, 10);
        await user.save();
        await PasswordReset.deleteMany({ email: record.email });

        res.status(200).json({
            message: 'Password updated successfully',
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Database se saare users laata hai (dashboard ke liye), password ke baghair
const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select('-password');
        res.status(200).json({
            success: true,
            users
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login,
    forgotPassword,
    resetPassword,
    getUsers
};