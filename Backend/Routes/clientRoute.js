import express from "express"
import { Client } from "../models/clientmodel.js"
import generateToken from "../Authorization/generateToken.js"
import bcrypt from "bcryptjs";

const router=express.Router()
router.post('/',async(req,res)=>{
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    const { email, password } = req.body;
    console.log(email, password);
    const userExist = await Client.findOne({ email });
 //console.log(req.body)
    if (!userExist) {
      console.log("not found")
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const pw = userExist.password; // pw= password from dataBase
    if (pw == password) {
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

// ------------------ SIGNUP ROUTE ------------------
router.post("/signup", async (req, res) => {
  console.log("aaya");
  try {
    const { email, password, location } = req.body;
    console.log(req.body);
    // Validate required fields
    if (!email || !password || !location) {
      return res.status(400).json({
        message: "Send all required fields: email, password, location",
      });
    }

    // Check if user already exists
    const existingUser = await Client.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await Client.create({
      email,
      password: hashedPassword,
      location,
    });

    // Generate JWT token
    const token = generateToken(newUser.email, newUser._id);

    // Response
    res.status(201).json({
      message: "User created successfully",
      token: token,
      location: newUser.location,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  export default router ;