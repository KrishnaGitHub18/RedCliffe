import express from "express";
import { ClientOrder } from "../models/clientOrdermodel.js";

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { location, stock } = req.body;

    const newClientOrder = new ClientOrder({ location, stock });
  await newClientOrder.save();
    res.status(201).json(newClientOrder);
    console.log(newClientOrder) 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const reagents = await ClientOrder.find(); 
    res.status(200).json(reagents); 
    console.log(reagents) ;
  } catch (error) {
    console.error("Error fetching reagents:", error);
    res.status(500).json({ message: "Failed to fetch reagents" });
  }
});
export default router;
