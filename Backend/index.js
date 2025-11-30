import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminRoute from "./Routes/adminRoute.js";
import clientRoute from "./Routes/clientRoute.js";
import reagentRoute from "./Routes/reagentRoute.js";
import clientOrder from "./Routes/clientOrder.js";
import clientOrderDetails from "./Routes/clientOrderDetails.js";
import verifyToken from "./Authorization/jwtmiddleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log(err));

app.use('/admin', adminRoute);
app.use('/client', clientRoute);
app.use('/reagent', verifyToken, reagentRoute);
app.use('/clientOrder', verifyToken, clientOrder);
app.use('/clientOrderDetails', clientOrderDetails);

app.listen(5173, () => {
  console.log("server is running on port 5173");
});
