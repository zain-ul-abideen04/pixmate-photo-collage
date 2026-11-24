const mongoose = require('mongoose');

const PasswordResetSchema = new mongoose.Schema({
    email: { type: String, required: true },
    tokenHash: { type: String, required: true },
    expiresAt: { type: Date, required: true }
});

// Expire hone ke baad MongoDB record khud hata deta hai
PasswordResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports =
    mongoose.models.PasswordReset ||
    mongoose.model('PasswordReset', PasswordResetSchema);