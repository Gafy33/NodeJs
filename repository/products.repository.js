import Produit from "../models/schema_produits.js";

export class ProductsRepository {

    // Constructeur de la classe
    constructor() {};

    //Permet de retourner tous les produit dans la collection
    get() {
        return new Promise((resolve, reject) => {
            //resolve(this.products);
            Produit.find({}, function (err, docs) {
                if(err)
                {
                    reject(err)
                } else {
                    docs= docs.map(item=> item.toObject())
                    resolve(docs)
                }
            });
        });
    };

    //Permet de retourner un seul produit dans la collection avec en paramètre l' "id"
    getOne(id){
        return new Promise((resolve, reject) => {
            Produit.findById(id, function (err, doc) {
                if(err)
                {
                    reject(err)
                } else {
                    doc= doc.toObject()
                    resolve(doc)
                }
            });
        });
    };


    //Permet de créer un nouveau produits dans la collection
    create(product){

        return new Promise((resolve, reject) => {

            Produit.create({
                name: product.name,
                qty: product.qty,
                description: product.description,
                }, (err, doc) => {
                if (err) { 
                    reject(err)
                } else {
                    resolve(doc);
                }
            });
                

            
        });
    };

    //Permet d'éditer un produit
    edit(product, id){

        return new Promise((resolve, reject) => {

            
            Produit.findById(id, function (err, doc) {
                if(err)
                {
                    reject(err)
                } else {

                    doc.name = product.name;
                    doc.qty = product.qty;
                    doc.description = product.description;
                    doc.save();

                    resolve(doc)
                }
            });
        });
    };


    //Permet de supprimer un produit grâce à l' "id"
    delete(id)
    {
        return new Promise((resolve, reject) => {
            Produit.deleteOne({_id: id}, function (err, doc) {
                if(err)
                {
                    reject(err)
                } else {
                    resolve(doc)
                }
            });
        });
    }

    //renvoie une liste des produits qui correspond à la rechercher demande
    search(product) {
        return new Promise((resolve, reject) => {
            Produit.find({name: { $regex: '.*' + product.name + '.*' }}, function (err, docs) {
                if(err)
                {
                    reject(err)
                } else {
                    docs= docs.map(item=> item.toObject())
                    resolve(docs)
                }
            });
        });
    };
}