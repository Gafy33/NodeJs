export class ProductsRepository {
    index;
    products = [
        { id: 1, name: "Cristaline", qty: 50, description: "izdizdj iojdzqiuhdqzgduzqdgqui dguz"},
        { id: 2, name: "Contrex", qty: 10, description: "izdizdj iojdzqiuhdqzgduzqdgqui dguz"},
        { id: 3, name: "Hepar", qty: 103, description: "izdizdj iojdzqiuhdqzgduzqdgqui dguz"},
        { id: 4, name: "Abatilles", qty: 39, description: "izdizdj iojdzqiuhdqzgduzqdgqui dguz"},
    ];

    constructor() {
        this.index = this.products.length;
    };

    get() {
        //return this.products;

        return new Promise((resolve, _reject) => {
            resolve(this.products);
        });
    };

    getOne(id){
        //return this.products.find((p) => p.id === id );

        return new Promise((resolve, _reject) => {
            resolve(this.products.find((p) => p.id === id ));
        });
    };

    create(product){
        /*const existing = this.products.find((p) => p.name === product.name);
        if (existing)
        {
            return undefined;
        }

        const newProduct = {
        ...product,
        id: ++this.index
        };
        this.products.push(newProduct);
        return newProduct;*/

        return new Promise((resolve, _reject) => {
            
            const existing = this.products.find((p) => p.name === product.name);
            
            if (existing)
            {
                _reject(undefined);
            }

            const newProduct = {
                ...product,
                id: ++this.index
            };
            this.products.push(newProduct);

            resolve(newProduct);
        });
    };

    edit(product, id){
        const existing = this.products.find((p) => p.id == id);

        return new Promise((resolve, _reject) => {

            if (existing)
            {
                existing.name = product.name;
                existing.qty = product.qty;
                existing.description = product.description;
                
                resolve(existing);
            }
        });
    };
}