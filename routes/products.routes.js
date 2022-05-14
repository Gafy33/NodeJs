import express from "express";

export function routes(controller) {
    const router = express.Router();

    router.get('/', (req, res) => controller.getAll(req, res));
    router.get('/create', (req, res) => controller.createForm(req, res));
    router.get('/edit/:id', (req, res) => controller.editForm(req, res));
    router.post('/create', (req, res) => controller.create(req, res));
    router.post('/edit/:id', (req, res) => controller.edit(req, res));
    router.get('/delete/:id', (req, res) => controller.delete(req, res));
    router.get('/:id', (req, res) => controller.getOne(req, res));
    router.post('/search', (req, res) => controller.search(req, res));

    return router;
}