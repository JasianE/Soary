const pharmacy = require('../models/general.model')[0]

exports.incoming = function (req, res, next) {
  const {
    name: pharmacyName
  } = req.body

  const pharmacy = pharmacy.findOne({ name: pharmacyName }, function (err, data) {
    if (err) {
      res.status(500).send(err)
    } else {

    }
  });
}

exports.approve = function (req, res, next) {

}

