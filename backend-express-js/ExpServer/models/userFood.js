 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const userSchema = new Schema({
    userName : String,
    phone : String,
    email : String,
    password : String,
    address : {},
    role : String
})

module.exports = mongoose.model('userFood',userSchema,'userFoods') 

