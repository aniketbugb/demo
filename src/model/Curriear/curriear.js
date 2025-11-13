const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const Currier = new Schema({
    fname: { type: String, select: true },
    lname: { type: String, select: true },
    email: { type: String, select: true },
    M_no: { type: String, select: true },
    address: { type: String, select: true },
    city: { type: String, select: true },
    state: { type: String, select: true },
    resume: { type: String, select: true },
    remark: { type: String, select: true }
});

module.exports = mongoose.model("Currier", Currier);