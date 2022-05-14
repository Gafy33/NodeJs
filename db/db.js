import { mongoose } from "mongoose";

export function connection(){
    const uri = 'mongodb://localhost:27017/produits';
    mongoose.connect(uri, (error) => {
    if (error) throw error;
     console.log('connection OK!');
    });
}
