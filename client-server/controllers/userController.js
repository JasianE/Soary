const users = require('../models/general.model')[2]
const pharmacies = require('../models/general.model')[0]

exports.placeOrder = async function(req,res, next){
    /* POSTMAN REQ
        {
            "name": "124",
            "request": {
                "supplier": "69",
                "landing-area": {"long": 63, "lat": 23},
                "home": {"long": 63, "lat": "23"},
                "pill": "tylenol",
                "shop": "shop"
            }
        }
     */
    pharmacies.find({name: req.body.request.supplier}, function(err,pharmacies){
        let pending = [...pharmacies[0].pending]
        pending.push(req.body.request)
        pharmacies[0].update({"pending": pending}, function(err){
            if(err){
                res.json(err)
            }
        })
    })
    users.find({firstName: req.body.name}, function(err, users){
        let active = [...users[0].active]
        active.push(req.body.request)
        users[0].update({"active": active}, function(err){
            if(err){
                res.json(err)
            }
        })
    })

    res.json('hi')
}

exports.getAllPharmacies = function(req, res, next) {
    const pharmacies = pharmacies.find({}, function(error, data) {
        if (error) {
            res.status(500).send(error)
        
        } else {
            res.status(200).send({"pharmacies": pharmacies})
        }
    })


}