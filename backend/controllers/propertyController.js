const Property = require("../models/Property");

const addProperty = async (req, res) => {
  const {
    title,
    place,
    area,
    bedrooms,
    bathrooms,
    nearbyFacilities,
    price,
    postedBy,
  } = req.body;
  try {
    const property = new Property({
      title,
      place,
      area,
      bedrooms,
      bathrooms,
      nearbyFacilities,
      price,
      postedBy,
    });
    await property.save();
    res.status(201).json({ message: "Property added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateProperty = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const property = await Property.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addProperty,
  getProperties,
  getProperty,
  updateProperty,
  deleteProperty,
};
