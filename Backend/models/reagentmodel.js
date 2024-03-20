import mongoose from "mongoose";
const reagentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  usedIn: [{
    type: String ,
    required: true
  }],
  stock:{
    type: String ,
    required: true
  } ,
  expiryDate:{
    type : String ,
    required:true 
  }

});
export  const Reagent = mongoose.model('Reagent', reagentSchema);
