const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "This is FASTOON API Server"});
});

module.exports = router;