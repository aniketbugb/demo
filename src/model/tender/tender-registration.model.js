const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Float = require('mongoose-float').loadType(mongoose);

const objSchema = new Schema({
    regNo: {type: String, default: null},
    eoiNo: {type: String, default: null},
    developer: {type: Schema.Types.ObjectId, default:null, ref:'Service_Receiver'},
    developerName: {type: String, default: null},
    projectId:{type: Schema.Types.ObjectId, default:null, ref:'Project_Registration'},
    projectName: {type: String, default: null},
    cityId: {type: Schema.Types.ObjectId, default:null, ref:'S_City'},
    cityName: {type: String, default: null},
    building: {type: String, default: null},
    scope: {type: Schema.Types.ObjectId, default:null, ref:'Expertise'},
    scopeName:{type: String, default: null},
    isOpen: {type: Boolean, default: true},
    isLive: {type: Boolean, default: false},
    isPublic: {type: Boolean, default: false},
    startDate: {type: Date, default: null},
    lastDate: {type: Date, default: null},
    maxContractValue: {type: Float, default: 0}, 
    remark: {type: String, default: null},
    location: {type: String, default: null},
    regOn: { type: Date, default: Date.now },
    isActive:{type:Boolean, default: true}
});
module.exports = mongoose.model('Tender_Registartion', objSchema);