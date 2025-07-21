const express = require('express');
const router = express.Router();




router.post('/payment/callback', (req, res) => {
    console.log('M-Pesa callback:', req.body);
    res.status(200).send("OK"); // ← M-Pesa expects this!
  });


  module.exports = router;