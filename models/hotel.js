const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autoIncrement = require("mongoose-auto-increment");

var connection = mongoose.createConnection(process.env.mongo);

autoIncrement.initialize(connection);
// const ObjectId = Schema.ObjectId
const HotelSchema = new Schema(
  {
    propertyId: Number,
    name: {
      type: String,
      trim: true,
      required: true,
      index: true
    },
    imageUrl: {
      type: String,
      trim: true,
      required: true
    },
    city: {
      type: String,
      trim: true,
      index: true,
      required: true
    },
    propertyType: {
      type: String,
      trim: true,
      index: true,
      required: true
    },
    bookings: [
      {
        name: {
          type: String,
          index: true,
          required: true,
          trim: true
        },
        phone: {
          type: String,
          trim: true
        }
      }
    ]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

HotelSchema.plugin(autoIncrement.plugin, {
  model: "Hotel",
  field: "propertyId",
  startAt: 1
});

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
