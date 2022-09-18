const models = require('../models/general.model')
const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController')
const userController = require('../controllers/userController')

/*Pharmacy Actions*/
//router.get('/pharmacy/income', pharmacyController)
//router.get('/pharmacy/findPending', pharmacyController)
//router.post('/pharmacy/approve', pharmacyController)

/*User Actions */
//router.get('/user/pharmacies', userController)
router.post('/user/place-order', userController.placeOrder)

/*Supplier Actions */
router.post('/supplier/home', supplierController)
router.get('/supplier/home', supplierController)
router.get('/supplier/deploy', supplierController)
