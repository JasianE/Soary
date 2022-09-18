const users = require('../models/general.model')[2]
const pharmacies = require('../models/general.model')[0]

exports.placeOrder = async function(req,res, next){
    /* POSTMAN REQ
        {
            "name": "80",
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
    pharmacies.find({}, function(error, data) {
        if (error) {
            res.status(500).send(error)
        
        } else {
            res.status(200).send({"pharmacies": data})
        }
    })
}

exports.confirmDelivery = function(req,res,next){
    //Change user active into user finished
    users.find({firstName: req.body.firstName}, function(err, user){
        let i = 0; 
        const active = [...user[0].active].find((key) => {
            i = i + 1
            return key.supplier === req.body.request.supplier && key.pill === req.body.request.pill
        })
        user[0].active.splice(i - 1, 1)
        user[0].finished.push(active)
        
        user[0].update({"active":user[0].active, "finished": user[0].finished}, function(err){
            if(err){
                console.log(err)
            }
        })
        
    })

    res.json('hi')
}