import mongoose from "mongoose"
const { Schema } = mongoose;

const stockSchema = new Schema({
    reagent: { type: String},
    quantity: { type: Number, default: 0 },
    class: { type: [String]},
});

const locationSchema = new Schema({
    location: { type: String },
    stock: { type: [stockSchema] }
});

export const ClientOrder = mongoose.model('ClientOrder', locationSchema);

