const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna a lista de todos os clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/', clienteController.getAllClientes);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post('/', clienteController.createCliente);

module.exports = router;
