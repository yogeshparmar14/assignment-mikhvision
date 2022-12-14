const express = require('express');
const { registration,login,userList } = require('../modules/authentication/authController.js');
const authValidation =require("../modules/authentication/authValidationSchemas.js");
 

const router = express.Router();


//Router level Middleware - To Protect Route
// router.use('/register',validationRegister);
 

//Public routes
router.post('/register',authValidation,registration);
router.post('/login',login)
router.get('/userList',userList)
 





module.exports = router;