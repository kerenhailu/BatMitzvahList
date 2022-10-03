const mongoose = require("mongoose");
const schama = mongoose.Schema;

const User = new schama(
  {
    Name: { type: String, required: true },
    FamName: { type: String, required: true },
    Count: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
