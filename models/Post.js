const mongoose = require('mongoose');
const { stringify } = require('querystring');

// const postSchemacc = mongoose.Schema({
//     Charge_Controller_Id: String,
//     Charge_Controller_Status: String,
//     Solar_Input_Current: String,
//     Solar_Input_Power: String,
//     Solar_Input_Voltage: String,
//     Battery_Load_Current: String,
//     Battery_Load_Power: String,
//     Buck_Output_Voltage: String
// });
// const postSchemasscb = mongoose.Schema({
//     SSCB_Id: String,
//     SSCB_Status: String,
//     Input_Current: String,
//     Output_Current: String,
//     Output_Energy: String,
//     Output_Power: String,
//     Output_Voltage: String
// });
const alambadi_cluster_sscb = mongoose.Schema({
    SSCB_Id: String,
    SSCB_Status: String,
    Input_Current: String,
    Output_Current: String,
    Output_Energy: String,
    Output_Power: String,
    Output_Voltage: String,
    Identification: String,
    F_port: String,
    F_cnt: String,
    Time: String
});
const alambadi_cluster_cc = mongoose.Schema({
    Charge_Controller_Id: String,
    Charge_Controller_Status: String,
    Solar_Input_Current: String,
    Solar_Input_Power: String,
    Solar_Input_Voltage: String,
    Battery_Load_Current: String,
    Battery_Load_Power: String,
    Buck_Output_Voltage: String,
    Identification: String,
    F_port: String,
    F_cnt: String,
    Time: String
});


//module.exports = mongoose.model('Posts', postSchema);
// const CC = mongoose.model('CC', postSchemacc);
// const SSCB = mongoose.model('SSCB', postSchemasscb);

const sscba1 = mongoose.model('alambadi_a-1_sscb', alambadi_cluster_sscb);
const sscba2 = mongoose.model('alambadi_a-2_sscb', alambadi_cluster_sscb);
const sscba3 = mongoose.model('alambadi_a-3_sscb', alambadi_cluster_sscb);
const sscba4 = mongoose.model('alambadi_a-4_sscb', alambadi_cluster_sscb);
const sscba5 = mongoose.model('alambadi_a-5_sscb', alambadi_cluster_sscb);
const sscba6 = mongoose.model('alambadi_a-6_sscb', alambadi_cluster_sscb);

const cca1 = mongoose.model('alambadi_a-1_cc', alambadi_cluster_cc);
const cca2 = mongoose.model('alambadi_a-2_cc', alambadi_cluster_cc);
const cca3 = mongoose.model('alambadi_a-3_cc', alambadi_cluster_cc);
const cca4 = mongoose.model('alambadi_a-4_cc', alambadi_cluster_cc);
const cca5 = mongoose.model('alambadi_a-5_cc', alambadi_cluster_cc);
const cca6 = mongoose.model('alambadi_a-6_cc', alambadi_cluster_cc);

module.exports = { sscba1, sscba2, sscba3, sscba4, sscba5, sscba6, cca1, cca2, cca3, cca4, cca5, cca6 };