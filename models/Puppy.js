const
  mongoose = require('mongoose'),
  puppySchema = new mongoose.Schema({
    name: {type:String},
    breed: {type:String},
    gender: {type:String},
    age: {type:Number},
    vaccines: {type:Boolean}
  })

module.exports = mongoose.model('Puppy', puppySchema)
