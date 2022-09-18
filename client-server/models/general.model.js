const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PharmacySchema = new Schema({
    name: {type: String, required: true},
    drones: {type: Array, default: []},
    pending: {type: Array, default: []},
    approved: {type: Array, default: []},
})

const SupplierSchema = new Schema({
    landing: {type: String, default: ''}
})

const User = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    active: {type: Array, default: []},
    finished: {type: Array, default: []},
    home: {type: String, default: ''}
})

const names = ['Pharmacy', 'Supplier', 'User']
let models = [PharmacySchema, SupplierSchema, User]
let actual = []

for(let i = 0; i < 3; i++){
    actual.push(mongoose.model(names[i], models[i]))
}

module.exports = actual