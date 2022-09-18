const models = require('../models/general.model')
const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController')
const userController = require('../controllers/userController')

/*Pharmacy Actions*/
router.get('/pharmacy/:name/income', pharmacyController.incoming)
router.get('/pharmacy/:name/findPending', pharmacyController.findPending)
//router.post('/pharmacy/approve', pharmacyController)

/*User Actions */
router.get('/user/pharmacies', userController.getAllPharmacies)
router.post('/user/place-order', userController.placeOrder)
router.post('/user/confirm-delivery', userController.confirmDelivery)

/*Supplier Actions */
//router.post('/supplier/home', supplierController)
//router.get('/supplier/home', supplierController)
//router.get('/supplier/deploy', supplierController)

module.exports = router