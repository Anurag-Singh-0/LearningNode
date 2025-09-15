const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isDrink: {
    type: Boolean,
  },
  test: {
    type: String,
    enum: ["Spicy", "Sweet"],
  },
  numSells: {
    type: Number,
    required: true,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
