const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },  
  phonenumber:{
    type:String,
    required:true
  },  
  aboutyourself:{
    type:String,
    required:true
  }  
});
const Contact = mongoose.model('Contact', clientSchema);

module.exports = Contact;