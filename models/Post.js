const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchemacc = mongoose.Schema({
    Charge_Controller_Id: String,
    Charge_Controller_Status: String,
    Solar_Input_Current: String,
    Solar_Input_Power: String,
    Solar_Input_Voltage: String,
    Battery_Load_Current: String,
    Battery_Load_Power: String,
    Buck_Output_Voltage: String
});
const postSchemasscb = mongoose.Schema({
    name: String,
    title: String,
    desc: String,
    desc: String,
    desc: String,
    desc: String,
    desc: String
});

//module.exports = mongoose.model('Posts', postSchema);
const CC = mongoose.model('CC', postSchemacc);
const SSCB = mongoose.model('SSCB', postSchemasscb);

module.exports = { CC, SSCB };