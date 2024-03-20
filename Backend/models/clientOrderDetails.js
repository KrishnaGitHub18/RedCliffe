
import mongoose from "mongoose";
const clientOrderDetails = new mongoose.Schema({
  location: {
    type: String
  },
  units: {
    type: Number
  },
  name: {
    type: String
  },
  Status: {
    type: String,
    default: "Pending"
  },
});
export const orderDetail = mongoose.model('orderDetail', clientOrderDetails);


// const newAdmin = new Client({
//   email: "ayush@gmail.com",
//   password: "12345678",
//   location :"Banaras"
// });
// console.log(newAdmin);
//  newAdmin.save();