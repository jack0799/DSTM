const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchemacc = mongoose.Schema({
    Charge_Controller_Id: Number,
    Charge_Controller_Status: Number,
    Solar_Input_Current: Number,
    Solar_Input_Power: Number,
    Solar_Input_Voltage: Number,
    Battery_Load_Current: Number,
    Battery_Load_Power: Number,
    Buck_Output_Voltage: Number
});
const postSchemasscb = mongoose.Schema({
    SSCB_Id: Number,
    SSCB_Status: Number,
    Input_Current: Number,
    Output_Current: Number,
    Output_Energy: Number,
    Output_Power: Number,
    Output_Voltage: Number
});

//module.exports = mongoose.model('Posts', postSchema);
const CC = mongoose.model('CC', postSchemacc);
const SSCB = mongoose.model('SSCB', postSchemasscb);

module.exports = { CC, SSCB };