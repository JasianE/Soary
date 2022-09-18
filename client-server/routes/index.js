const models = require('../models/general.model')
const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController')
const supplierController = require('../controllers/supplierController')
const userController = require('../controllers/userController')

/*Pharmacy Actions*/
//router.get('/pharmacy/income', pharmacyController)
//router.get('/pharmacy/findPending', pharmacyController)
//router.post('/pharmacy/approve', pharmacyController)

/*User Actions */
router.get('/user/pharmacies', userController.getAllPharmacies)
router.post('/user/place-order', userController.placeOrder)
router.post('/user/confirm-delivery', userController.confirmDelivery)

/*Supplier Actions */

router.post('/supplier/home', supplierController.home)
router.get('/supplier/home', supplierController.home)
router.get('/supplier/deploy', supplierController.deploy)


module.exports = router;

