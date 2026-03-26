const express = require('express');
const router = express.Router();
const authController = require('../modules/controller/authcontroller');

router.post('/generate-token', authController.generateToken);