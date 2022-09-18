const pharmacy = require('../models/general.model')[0]

exports.incoming = function(req,res,next){
    pharmacy.find({name: req.params.name}, function(err, pharmacy){
        res.json(pharmacy[0].drones)
    })
}

exports.findPending = function(req,res,next){
    pharmacy.find({name: req.params.name}, function(err, pharmacy){
        res.json(pharmacy[0].pending)
    })
}


exports.approve = function(req,res,next){
    pharmacy.find({name: req.body.name}, function(err, pharmacies){
        let i = 0; 
        const approved = [...user[0].pending].find((key) => {
            i = i + 1
            return key.supplier === req.body.request.supplier && key.pill === req.body.request.pill
        })
        pharmacies[0].active.splice(i - 1, 1)
        pharmacies[0].finished.push(approved)
        
        user[0].update({"active":user[0].active, "finished": user[0].finished}, function(err){
            if(err){
                console.log(err)
            }
        })
    })
}

