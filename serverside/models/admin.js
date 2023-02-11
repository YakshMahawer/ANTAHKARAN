const mongoose = require('mongoose')
const validator = require('validator')

const AdminSchema = new mongoose.Schema({

  email:{
    type:String,
    required:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Provide a valid email')
      }
    }
  },
 
  password:{
    type:String,
    required:true,
  },

})

const AdminData = new mongoose.model('ADMIN', AdminSchema)

module.exports = AdminData;