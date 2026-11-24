const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      required: function () {
        // Facebook se kabhi kabhi email nahi aati
        return !this.facebookId;
      },
    },
    password: {
      type: String,
      // Google/Facebook wale user ka password nahi hota
      required: function () {
        return !this.googleId && !this.facebookId;
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },
    picture: String,
    // NEW: role (signup form se kabhi nahi liya jata, default "user")
    role: { type: String, enum: ["user", "manager", "admin", "editor", "support", "viewer"], default: "user" },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;