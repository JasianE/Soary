const supplier = require('../models/general.model')[1]
const pharmacy = require('../models/general.model')[0]
const axios = require('axios').default;

exports.home = function (req, res, next) {
  supplier.findOne({ landing: req.body.landing }, function (err, data) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
}

exports.home = function (req, res, next) {
  supplier.findOneAndUpdate({ landing: req.body.landing }, { $set: { home: req.body.home } }, function (err, data) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
}

exports.deploy = function (req, res, next) {

  const reqBody = req.body;
  const latitude = reqBody.latitude;
  const longitude = reqBody.longitude;
  const destination = reqBody.destination;
  const supplier = reqBody.supplier;

  axios.post('http://localhost:3000/api/v1/move', { "latitute": reqBody.latitute, "longitude": reqBody.longitude, "destination": req.body.destination })
    .then(() => {
      pharmacy.findOneAndUpdate({ name: destination }, { $push: { drones: { "supplier": supplier } } }, function (err, data) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
      })
    })
}