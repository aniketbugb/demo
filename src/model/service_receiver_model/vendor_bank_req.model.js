const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objSchema = new Schema({
    providerId : { type: Schema.Types.ObjectId, ref: "Service_Provider", default: null },
    ContractorPro_firmName:{type:String},
    ContractorPro_firmRepresentative:{type:String},
    ContractorPro_representativeDesignation:{type:String},
    
    receiverId : { type: Schema.Types.ObjectId, ref: "Service_Receiver", default:null },
    
    clientRec_firmName:{type:String},
    clientRec_firmRepresentative:{type:String},
    clientRec_representativeDesignation:{type:String},
    who_sendReq:{type:String},
    isAccepted : { type: Boolean, default: false },
    lastModified:{type:Date, default:Date.now},
    isActive : { type: Boolean, default: true }
})
module.exports = mongoose.model('Vendor_Bank_Request',objSchema);