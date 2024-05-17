const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  place: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  nearbyFacilities: [String],
  price: Number,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
