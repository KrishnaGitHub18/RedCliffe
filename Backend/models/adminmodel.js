
import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }

});
export  const Admin = mongoose.model('admins', adminSchema);


// const newAdmin = new Client({
//   email: "ayush@gmail.com",
//   password: "12345678",
//   location :"Banaras"
// });
// console.log(newAdmin);
//  newAdmin.save();