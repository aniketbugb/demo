const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt"); // Import Bcrypt Package
var titlize = require("mongoose-title-case");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require("jsonwebtoken");
const userSchema = new Schema({
  name: { type: String, default: null },
  email: { type: String, lowecase: true, default: null },
  mobile: { type: String, lowecase: true, default: null },
  userName: { type: String, default: null },
  hash_password: { type: String, default: null },
  gender: { type: String, default: "male" },
  profile: { type: String, default: null },
  roleID: { type: Schema.Types.ObjectId, ref: "Role", default: null },
  role: { type: String, default: "contractor" },
  address: {
    stateID: { type: Schema.Types.ObjectId, ref: "S_State", default: null },
    cityID: { type: Schema.Types.ObjectId, ref: "S_City", default: null },
    pincode: { type: String, default: null },
    address: { type: String, default: null },
  },
  source: { type: String, default: "mobile" }, // source of registered form data f.e 'web' / 'mobile'
  regOn: { type: Date, default: Date.now },
  editOn: { type: Date, default: null },
  temporarytoken: { type: String, default: null },
  fcmToken: { type: String, default: null }, //firebase push notifications  Android
  fcmToken_web: { type: String, default: null }, //firebase push notifications web
  resettoken: { type: String, required: false, default: null },
  isActive: { type: Boolean, default: true },

  //add by don
  registerr: { type: String, default: null },
  Expertise: { type: String, default: null },
  Expertise_id: { type: Schema.Types.ObjectId, default:null, ref:'Expertise' },
  firm: { type: String, default: null },
  contact: { type: String, lowecase: true, default: null },
  subscription: {
    status: { type: Boolean, default: false },
    expirationDate: { type: Date },
    amount: { type: Number },
    orderId: { type: String },
  },
  history: [
    {
      status: { type: Boolean, default: false },
      expirationDate: { type: Date },
      amount: { type: Number },
      orderId: { type: String },
    },
  ], // Example: Store history as an array of strings
});
userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};
userSchema.methods = {
  matchPassword: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
  generateToken: async function () {
    return jwt.sign(
      { _id: this._id, username: this.username, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  },
};

module.exports = mongoose.model("User_Admin", userSchema);
