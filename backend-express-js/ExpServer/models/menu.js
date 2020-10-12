const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
   foodName : String,
   foodPrice : Number,
   foodImgPath : String
})

module.exports = mongoose.model('menu',menuSchema,'menu') 