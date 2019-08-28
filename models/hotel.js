const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./user");
// const ObjectId = Schema.ObjectId
const HotelSchema = new Schema(
  {
    id: { type: String, unique: true, index: true, required: true, trim: true },
    name: { type: String, trim: true, required: true },
    city: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
