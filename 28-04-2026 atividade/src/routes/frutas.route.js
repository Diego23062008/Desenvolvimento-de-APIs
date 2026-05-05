import { Router } from 'express'
import { frutasService } from '../services/frutas.service.js'

export const frutasRoute = Router()

// Rota GET
frutasRoute.get("/", async (req, res) => {
    const frutas = await frutasService.getAll()
    res.json(frutas)
})

// Rota POST - Note que mudei de 'router' para 'frutasRoute'
frutasRoute.post('/', async (req, res) => {
    res.send('Novo recurso criado');
});

// Rota PUT
frutasRoute.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Recurso com ID: ${id} atualizado`);
});

// Rota PATCH
frutasRoute.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Recurso com ID: ${id} atualizado parcialmente`);
});

// Rota DELETE
frutasRoute.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Recurso com ID: ${id} removido`);
});