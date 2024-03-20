import express from "express"
const router = express.Router()
import { Reagent } from "../models/reagentmodel.js"
import { orderDetail } from "../models/clientOrderDetails.js"
import { ClientOrder } from "../models/clientOrdermodel.js"
router.post('/', async (req, res) => {
   const { name, location, units } = req.body;
   try {
      const reagent = await Reagent.findOne({name});
      console.log(reagent)
      if (!reagent) {
         return res.status(400).send({ message: 'Reagent not found' });
      }

      const stock = parseInt(reagent.stock);
      const requestedUnits = parseInt(units);

      if (stock < requestedUnits) {
         return res.status(200).send({ message: `Only ${stock} units are available` });
      }

      const newOrderDetail = new orderDetail({ name, location, units });

      const savedOrderDetail = await newOrderDetail.save();
      if (savedOrderDetail) {
         return res.status(200).send({ message: 'Data saved successfully' });
      }
   } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Internal Server Error' });
   }

});


router.get('/', async (req, res) => {
   try {
      const reagents = await orderDetail.find();
      res.status(200).json(reagents);
   } catch (error) {
      console.error("Error fetching reagents:", error);
      res.status(500).json({ message: "Failed to fetch reagents" });
   }
})


router.put('/:id', async (req, res) => {
   try {
//=============================================Updating Client Stock======================
  const reagentClient = await ClientOrder.findOne({ location: req.body.location });
const arClient = reagentClient.stock;
const newar = arClient.filter((prev) => prev.reagent === req.body.name);
const obj = newar[0];
const st3 = parseInt(obj.quantity) + parseInt(req.body.units);
const updatedDocumentClient = await ClientOrder.findOneAndUpdate(
   { "location": req.body.location, "stock.reagent": req.body.name },
   { $set: { "stock.$.quantity": st3 } },
   { new: true }
);

// =======================================Update Stock for Reagent ====================
const reagent = await Reagent.findOne({name : req.body.name});
   const st= parseInt(reagent.stock) 
const st2=st- (req.body.units)
const update={
   stock : st2.toString() 
}
const options = {
   returnOriginal: true
 };
  const updatedDocument = await Reagent.findOneAndUpdate({name : req.body.name}, update, options); 
  //================================Update The Status =========================================================
      const updated = await orderDetail.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
      );
      res.status(200).json(updated);
   } catch (err) {
      res.status(500).json(err);
   }
})

export default router