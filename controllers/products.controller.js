export class ProductsController {
    repository = undefined;

    constructor(repository) {
        this.repository = repository;
    }

    getAll(req, res) {
        //const products = this.repository.get();
        //res.render("index", { products })/

        this.repository.get().then((products) => {
            res.render('index', { products });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    getOne(req, res) {
        console.log(req.params.id);
        const id = +req.params.id;
        //const product = this.repository.getOne(id);
        //res.render("details", { product })
        this.repository.getOne(id).then((product) => {
            res.render('details', { product });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    createForm(req, res) {
        res.render("create", {product: {} });
    }

    editForm(req, res) {
        const id = +req.params.id;
        this.repository.getOne(id).then((product) => {
            res.render('edit', { product });
        }).catch((error)=>{
            console.log('Error', error);
        });
    }

    create(req, res){

        this.repository.create(req.body).then((product) => {
            res.redirect('/');
        }).catch((error)=>{
            console.log('Error', error);
        });

        /*if (product) {
            res.redirect('/');
        }
        else {
            res.render('create', {
                error : true,
                product : req.body
            });
        }*/
    }

    edit(req, res){
        const id = +req.params.id;
        this.repository.edit(req.body, id).then((product) => {
            res.redirect('/');
        }).catch((error)=>{
            console.log('Error', error);
        });
    }
}