import { mongoose } from "mongoose";

const produits = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    qty: { type: String, required: true },
    description: { type: String, required: true },
});

const Produit = mongoose.model('Produit', produits);

export default Produit;