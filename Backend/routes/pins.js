const router = require("express").Router();
const Pin = require("../models/Pin");


//create a pin

router.post("/", async (req, res) => {
    console.log(req.body);
    const newPin = new Pin(req.body);
    try{ 
        const savedPin = await newPin.save();
        console.log(newPin, savedPin);
        res.status(200).json(savedPin);
    } catch (err) {
       res.status(500).json(err);
    }
});

//get all pins

router.get("/", async (req, res) => {
    try {
      const pins = await Pin.find();
      res.status(200).json(pins);
    } catch (err) {
      res.status(500).json(er);
    }
})

module.exports = router
//git checking