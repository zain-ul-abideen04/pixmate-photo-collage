const nodemailer = require("nodemailer");

let transporter = null;

// Transporter pehli email bhejte waqt banta hai, taake .env ki values load ho chuki hon
function getTransporter() {
  if (transporter) return transporter;

  const port = Number(process.env.SMTP_PORT) || 587;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function settingsMissing() {
  return !process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS;
}

async function sendWelcomeEmail(to, name) {
  if (settingsMissing()) {
    console.log("Email settings missing in .env, welcome email skipped");
    return;
  }

  const firstName = (name || "").trim().split(" ")[0] || "there";

  await getTransporter().sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    subject: "Welcome to Pixmate!",
    text: `Hi ${firstName}, welcome to Pixmate! Your account is ready.`,
    html: `<h2 style="color:#C8005D;">Welcome to Pixmate, ${escapeHtml(firstName)}!</h2>
           <p>Your account is ready. Start creating your first collage now.</p>`,
  });

  console.log("Welcome email sent to:", to);
}

async function sendResetEmail(to, name, link) {
  if (settingsMissing()) {
    console.log("Email settings missing in .env, reset email skipped");
    return;
  }

  const firstName = (name || "").trim().split(" ")[0] || "there";

  await getTransporter().sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    subject: "Reset your Pixmate password",
    text: `Hi ${firstName}, open this link to reset your password (valid for 15 minutes): ${link}\n\nIf you did not ask for this, you can ignore this email.`,
    html: `<h2 style="color:#C8005D;">Reset your password</h2>
           <p>Hi ${escapeHtml(firstName)}, click the button below to choose a new password. This link is valid for 15 minutes.</p>
           <p><a href="${escapeHtml(link)}" style="display:inline-block;background:#C8005D;color:#fff;padding:12px 24px;border-radius:24px;text-decoration:none;">Reset password</a></p>
           <p style="color:#666;font-size:13px;">If you did not ask for this, you can ignore this email.</p>`,
  });

  console.log("Reset email sent to:", to);
}

module.exports = { sendWelcomeEmail, sendResetEmail };