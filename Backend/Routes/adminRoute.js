import express from "express"
import { Admin } from "../models/adminmodel.js"
import generateToken from "../Authorization/generateToken.js"

const router= express.Router()
router.post('/',async(request,response)=>{
    try {
        if (!request.body.email || !request.body.password) {
          return response.status(400).send({
            message: "Send all required fields",
          });
        }
    
        const { email, password } = request.body;
        const userExist = await Admin.findOne({ email });
    
        if (!userExist) {
          return response.status(400).json({ message: "Invalid credentials" });
        }
        const pw = userExist.password; 
        if (pw === password) {
          const token = generateToken(email, password);
          response
            .status(200)
            .json({ message: "success token gerenerated", token: token });
        } else {
          response.status(400).json({ message: "Invalid credentials" });
        }
      } catch (error) {
        response.status(500).send({ message: error.message });
      }  
})
export default router ;