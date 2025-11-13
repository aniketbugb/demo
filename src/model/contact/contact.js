const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact = new Schema({
  cname: { type: String, select: true },

  cemail: { type: String, select: true },
  Cm_no: { type: String, select: true },
  message: { type: String, select: true },
});

module.exports = mongoose.model("Contact", Contact);
