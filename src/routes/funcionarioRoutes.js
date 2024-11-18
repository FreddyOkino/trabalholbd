const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Retorna todos os funcionários
 *     responses:
 *       200:
 *         description: Lista de funcionários
 */
router.get('/', funcionarioController.getAllFuncionarios);

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cria um novo funcionário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 */
router.post('/', funcionarioController.createFuncionario);

module.exports = router;
