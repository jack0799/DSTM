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
    console.log(req.body);
    const post = new CC({
        Charge_Controller_Id: req.body.payload_fields.Charge_Controller_Id,
        Charge_Controller_Status: req.body.payload_fields.Charge_Controller_Status,
        Solar_Input_Current: req.body.payload_fields.Solar_Input_Current,
        Solar_Input_Power: req.body.payload_fields.Solar_Input_Power,
        Solar_Input_Voltage: req.body.payload_fields.Solar_Input_Voltage,
        Battery_Load_Current: req.body.payload_fields.Battery_Load_Current,
        Battery_Load_Power: req.body.payload_fields.Battery_Load_Power,
        Buck_Output_Voltage: req.body.payload_fields.Buck_Output_Voltage
    });
    const post1 = new SSCB({
        SSCB_Id: req.body.payload_fields.SSCB_Id,
        SSCB_Status: req.body.payload_fields.SSCB_Status,
        Input_Current: req.body.payload_fields.Input_Current,
        Output_Current: req.body.payload_fields.Output_Current,
        Output_Energy: req.body.payload_fields.Output_Energy,
        Output_Power: req.body.payload_fields.Output_Power,
        Output_Voltage: req.body.payload_fields.Output_Voltage
    });
    if (req.body.counter % 4 == 0) {
        try {
            const savedPost = await post.save();
            res.json(savedPost);
        } catch (err) {
            res.json({ message: err });
        }


    }
    else {

        try {
            const savedPost = await post1.save();
            res.json(savedPost);
        } catch (err) {
            res.json({ message: err });
        }

    }



});

module.exports = router;