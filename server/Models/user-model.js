const mongoose = require("mongoose");
const schama = mongoose.Schema;

const User = new schama(
  {
    FirstName: { type: String, required: true },
    FamName: { type: String, required: true },
    Count: { type: Number, required: true },
    Phone : { type: Number, required: true },
    IsArrive :{ type: Boolean }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
