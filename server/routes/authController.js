const express = require('express');
const authController = express.Router();
const User = require("../models/User");
const passport = require('passport');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const multer = require("multer");
const upload = multer({ dest: './public/uploads/'});
const ensureLogin = require("connect-ensure-login");



module.exports = authController;
