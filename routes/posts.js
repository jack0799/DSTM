const express = require('express');
const router = express.Router();
const { CC, SSCB } = require('../models/Post');

router.get('/', async (req, res) => {
    res.send('Post');
    // try {
    //     const posts = await CC.find();
    //     res.json(posts);
    // } catch (err) {
    //     res.json({ message: err });
    // }
});

router.post('/', async (req, res) => {


    const post = new CC({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage
    });
    const post1 = new SSCB({
        SSCB_Id: req.body.uplink_message.decoded_payload,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage
    });
    if (req.body.uplink_message.f_port == 1) {
        console.log(req.body.uplink_message.f_port);
        try {
            const savedPost = await post.save();
            res.json(savedPost);
        } catch (err) {
            res.json({ message: err });
        }


    }
    else {
        console.log(req.body.uplink_message.f_port);

        try {
            const savedPost = await post1.save();
            res.json(savedPost);
        } catch (err) {
            res.json({ message: err });
        }

    }



});

module.exports = router;