const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  } , 
  email:{
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },  
  confirmedPassword:{
    type:String,
  
  }  
});
const User = mongoose.model('User', userSchema);

module.exports = User;
