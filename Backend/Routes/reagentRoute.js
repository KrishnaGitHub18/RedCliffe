import express from "express"
import { Reagent } from "../models/reagentmodel.js"

const router= express.Router() 
router.get('/',async(req,res)=>{
    try {
        const reagents = await Reagent.find(); 
        res.status(200).json(reagents); 
      } catch (error) {
        console.error("Error fetching reagents:", error);
        res.status(500).json({ message: "Failed to fetch reagents" });
      }
})
export default router