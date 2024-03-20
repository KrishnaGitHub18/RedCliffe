import express from "express"
import { Client } from "../models/clientmodel.js"
import generateToken from "../Authorization/generateToken.js"

const router=express.Router()
router.post('/',async(req,res)=>{
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    const { email, password } = req.body;
    const userExist = await Client.findOne({ email });
 //console.log(req.body)
    if (!userExist) {
      console.log("not found")
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const pw = userExist.password; // pw= password from dataBase
    if (pw === password) {
     // console.log("adsadsa    ")
      const token = generateToken(email, password);
      res.status(200).json({ message: "success token generated", token: token, location:  userExist.location });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})

  export default router ;