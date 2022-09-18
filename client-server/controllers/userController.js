const users = require('../models/general.model')[2]
const pharmacies = require('../models/general.model')[0]

exports.placeOrder = function(req,res, next){
    const pharmacy = new pharmacies({
        name: Math.floor(Math.random() * Math.random() * 100).toString(10)
    }).save(function(err){
        if(err){
            console.log(err)
        }
    })
    res.json('hi')
}