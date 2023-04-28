const express = require('express');
const router = express.Router();
let User = require('../models/userModel');

// response handlers in /utils
const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(500).json(err);

module.exports = router;