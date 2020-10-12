const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commandSchema = new Schema({
   commandAddress : String,
   commandPhone : Number,
   commandItems : []
})

module.exports = mongoose.model('command',commandSchema,'command') 