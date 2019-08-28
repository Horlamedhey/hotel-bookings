const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./user");
// const ObjectId = Schema.ObjectId
const PropertySchema = new Schema(
  {
    id: { type: String, unique: true, index: true, required: true, trim: true },
    name: { type: String, trim: true, required: true },
    city: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
