import express from 'express';
import { create } from 'express-handlebars'
import { ProductsController } from './controllers/products.controller.js';
import { ProductsRepository } from './repository/products.repository.js';
import { routes } from "./routes/products.routes.js";

import { connection } from "./db/db.js";

const PORT = process.env.PORT || 3000;
const TEMPLATING_EXT = '.hbs';

const app = express();

const hbs = create({ extname: TEMPLATING_EXT });
app.engine(TEMPLATING_EXT, hbs.engine);
app.set('view engine', TEMPLATING_EXT);

app.use(express.urlencoded({
    extended: true
}));

app.use('/assets', express.static('./assets'));

const repository = new ProductsRepository();
const controller = new ProductsController(repository);

app.use('/', routes(controller));

app.use((req, res) => {
    console.log('Route error');
    res.set('Content-Type', 'application/json');
    res.status(404).json({ error: 'Page not found' })
});

app.use((error, req, res, next) => {
    console.log('Fatal server error', error);
    res.set('Content-Type', 'application/json');
    res.status(500).json({ error: 'Fatal Server error' })
});

connection();

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});