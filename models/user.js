const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require("./plan")
require("./hotel");

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Hotel" }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
