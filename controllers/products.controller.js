export class ProductsController {
    repository = undefined;

    constructor(repository) {
        this.repository = repository;
    }


    //Renvoie sur la page index en passant en paramètres tous les produits
    getAll(req, res) {
        //const products = this.repository.get();
        //res.render("index", { products })/

        this.repository.get().then((products) => {
            res.render('index', { products });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }


    //Permet de renvoyer sur la pages détails en passant en paramètre le produit désigné
    getOne(req, res) {
        console.log(req.params.id);
        const id = req.params.id;

        this.repository.getOne(id).then((product) => {
            res.render('details', { product });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    //Permet de renvoyer sur le formulaire de création d'un produit
    createForm(req, res) {
        res.render("create", {product: {} });
    }

    //Permet de renvoyer sur le formulaire d'édition d'un produit
    editForm(req, res) {
        const id = req.params.id;
        this.repository.getOne(id).then((product) => {
            res.render('edit', { product });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }


    //Permet de renvoyer sur la page d'accueil après avoir créer un produit
    create(req, res){

        this.repository.create(req.body).then((product) => {
            res.redirect('/');
        }).catch((error)=>{
            console.log('Error', error);
        });

    }

    //Permet de renvoyer sur la page d'accueil après avoir modifier un produit
    edit(req, res){
        const id = req.params.id;
        this.repository.edit(req.body, id).then((product) => {
            res.redirect('/');
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    //Permet de renvoyer sur la page d'accueil après avoir supprimer un produit
    delete(req, res){
        const id = req.params.id;
        this.repository.delete(id).then(() => {
            res.redirect('/');
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    //Permet de renvoyer sur la page search les produits rechercher par name
    search(req, res){
        const name_search = req.body.name
        this.repository.search(req.body).then((products) => {
            res.render('search', { products, name_search });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }
}