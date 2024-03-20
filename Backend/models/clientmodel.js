import mongoose from 'mongoose' 

const clientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
  

});
export const Client= mongoose.model('clients', clientSchema);

