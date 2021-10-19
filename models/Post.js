const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchemacc = mongoose.Schema({
    Charge_Controller_Id: Float64Array,
    Charge_Controller_Status: Float64Array,
    Solar_Input_Current: Float64Array,
    Solar_Input_Power: Float64Array,
    Solar_Input_Voltage: Float64Array,
    Battery_Load_Current: Float64Array,
    Battery_Load_Power: Float64Array,
    Buck_Output_Voltage: Float64Array
});
const postSchemasscb = mongoose.Schema({
    SSCB_Id: Float64Array,
    SSCB_Status: Float64Array,
    Input_Current: Float64Array,
    Output_Current: Float64Array,
    Output_Energy: Float64Array,
    Output_Power: Float64Array,
    Output_Voltage: Float64Array
});

//module.exports = mongoose.model('Posts', postSchema);
const CC = mongoose.model('CC', postSchemacc);
const SSCB = mongoose.model('SSCB', postSchemasscb);

module.exports = { CC, SSCB };