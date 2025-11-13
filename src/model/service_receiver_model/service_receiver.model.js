const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require("mongoose-validator");
const bcrypt = require("bcrypt-nodejs");
const Float = require('mongoose-float').loadType(mongoose);

const objSchema = new Schema({
    userCode: { type: String, default: null },
    userRegID: {type: Schema.Types.ObjectId, default: null },
    userName: { type: String, default: null },
    updateCount: { type: Number, default: 0 },
    homeCity: { type: String, default: null },
    profile: { type: String, default: null },
    mobile: { type: String, default: null },
    alternateMobile: { type: String, default: null },
    email: { type: String, lowercase: true, default: null },
    password: { type: String, default: null },
    categoryId: { type: Schema.Types.ObjectId, default: null, ref: 'Category' },
    categoryType: { type: String, default: null },
    firmName: { type: String, default: null },
    firmType: { type: String, default: null },
    firmRepresentative: { type: String, default: null },
    representativeDesignation: { type: String, default: null },
    website: { type: String, default: null },
    role: { type: String, default: null },
    address: {
        stateID: { type: Schema.Types.ObjectId, ref: "S_State", default: null },
        stateName: { type: String, default: null },
        cityID: { type: Schema.Types.ObjectId, ref: "S_City", default: null },
        cityName: { type: String, default: null },
        pincode: { type: String, default: null },
        address: { type: String, default: null }
    },
    preferredCities: [{
        cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'S_City' },
        cityName: { type: String }
      }],
    yearOfEst: { type: String, default: null },        //year of establishment
    remark: { type: String, default: null },
    fcmToken: { type: String, default: null },
    regFrom: { type: String, default: 'Web' },        //App or Web
    regOn: { type: Date, default: Date.now },
    lastModified: { type: Date, default: Date.now },
    updateCount: { type: Number, default:0 },
    isActive: { type: Boolean, default: true },
    docs: [
        {
            name: { type: String, default: null },
            url: { type: String, default: null }
        }
    ]
})


// Middleware to ensure password is encrypted before saving user to database
objSchema.pre("save", function (next) {
    var user = this;

    if (!user.isModified("password")) return next();  // If password was not changed or is new, ignore middleware

    //Function to encypt password
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err); // Exit if error found
        user.password = hash; // Assign the hash to the User's password so it is saved in database encrypted
        next();  //Exit Bcrypt function
    });
});

// Method to compare passwords in API (when user logs in)
objSchema.methods.comparePassword = function (password) {
    console.log(
        "compare compare --> " + bcrypt.compareSync(password, this.password)
    );

    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Service_Receiver', objSchema);