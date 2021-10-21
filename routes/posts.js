const express = require('express');
const router = express.Router();
const { sscba1, sscba2, sscba3, sscba4, sscba5, sscba6, cca1, cca2, cca3, cca4, cca5, cca6 } = require('../models/Post');

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

    // const post = new CC({
    //     Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
    //     Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
    //     Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
    //     Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
    //     Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
    //     Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
    //     Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
    //     Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
    //     Identification: 'CC',
    //     F_port: req.body.uplink_message.f_port,
    //     F_cnt: req.body.uplink_message.f_cnt,
    //     Time: req.body.received_at
    // });
    // const post1 = new SSCB({
    //     SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
    //     SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
    //     Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
    //     Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
    //     Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
    //     Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
    //     Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
    //     Identification: 'SSCB',
    //     F_port: req.body.uplink_message.f_port,
    //     F_cnt: req.body.uplink_message.f_cnt,
    //     Time: req.body.received_at
    // });






    const cc1 = new cca1({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });

    const cc2 = new cca2({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });

    const cc3 = new cca3({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });

    const cc4 = new cca4({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });

    const cc5 = new cca5({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });

    const cc6 = new cca6({
        Charge_Controller_Id: req.body.uplink_message.decoded_payload.Charge_Controller_Id,
        Charge_Controller_Status: req.body.uplink_message.decoded_payload.Charge_Controller_Status,
        Solar_Input_Current: req.body.uplink_message.decoded_payload.Solar_Input_Current,
        Solar_Input_Power: req.body.uplink_message.decoded_payload.Solar_Input_Power,
        Solar_Input_Voltage: req.body.uplink_message.decoded_payload.Solar_Input_Voltage,
        Battery_Load_Current: req.body.uplink_message.decoded_payload.Battery_Load_Current,
        Battery_Load_Power: req.body.uplink_message.decoded_payload.Battery_Load_Power,
        Buck_Output_Voltage: req.body.uplink_message.decoded_payload.Buck_Output_Voltage,
        Identification: 'CC',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });


    const sscb1 = new sscba1({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });
    const sscb2 = new sscba2({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });
    const sscb3 = new sscba3({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });
    const sscb4 = new sscba4({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });
    const sscb5 = new sscba5({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });
    const sscb6 = new sscba6({
        SSCB_Id: req.body.uplink_message.decoded_payload.SSCB_Id,
        SSCB_Status: req.body.uplink_message.decoded_payload.SSCB_Status,
        Input_Current: req.body.uplink_message.decoded_payload.Input_Current,
        Output_Current: req.body.uplink_message.decoded_payload.Output_Current,
        Output_Energy: req.body.uplink_message.decoded_payload.Output_Energy,
        Output_Power: req.body.uplink_message.decoded_payload.Output_Power,
        Output_Voltage: req.body.uplink_message.decoded_payload.Output_Voltage,
        Identification: 'SSCB',
        F_port: req.body.uplink_message.f_port,
        F_cnt: req.body.uplink_message.f_cnt,
        Time: req.body.received_at
    });










    if (req.body.uplink_message.f_port == 1) {

        if (req.body.uplink_message.end_device_ids == 'cluster-a1') {
            try {
                const savedPost = await cc1.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a2') {
            try {
                const savedPost = await cc2.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a3') {
            try {
                const savedPost = await cc3.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a4') {
            try {
                const savedPost = await cc4.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a5') {
            try {
                const savedPost = await cc5.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a6') {
            try {
                const savedPost = await cc6.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }

        // try {
        //     const savedPost = await post.save();
        //     res.json(savedPost);
        //     console.log(req.body.uplink_message.decoded_payload.SSCB_Id);
        // } catch (err) {
        //     console.log(err);
        //     res.json({ message: err });
        // }




    }
    else {

        if (req.body.uplink_message.end_device_ids == 'cluster-a1') {
            try {
                const savedPost = await sscb1.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a2') {
            try {
                const savedPost = await sscb2.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a3') {
            try {
                const savedPost = await sscb3.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a4') {
            try {
                const savedPost = await sscb4.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a5') {
            try {
                const savedPost = await sscb5.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }
        else if (req.body.uplink_message.end_device_ids == 'cluster-a6') {
            try {
                const savedPost = await sscb6.save();
                res.json(savedPost);
                console.log(req.body.uplink_message.decoded_payload.Charge_Controller_Id);
            } catch (err) {
                console.log(err);
                res.json({ message: err });
            }

        }


        // try {
        //     const savedPost = await post1.save();
        //     res.json(savedPost);
        //     console.log(req.body.uplink_message.decoded_payload.SSCB_Id);
        // } catch (err) {
        //     console.log(err);
        //     res.json({ message: err });
        // }

    }



});

module.exports = router;