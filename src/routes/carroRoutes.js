const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');
/**
 * @swagger
 * /carros:
 *   post:
 *     summary: Cria um novo carro
 *     description: Cria um carro com modelo, preço, placa e vendas associadas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *                 example: "Fusca"
 *               preco:
 *                 type: number
 *                 format: float
 *                 example: 25000.00
 *               placa:
 *                 type: string
 *                 example: "ABC-1234"
 *               vendas:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 modelo:
 *                   type: string
 *                   example: "Fusca"
 *                 preco:
 *                   type: number
 *                   format: float
 *                   example: 25000.00
 *                 placa:
 *                   type: string
 *                   example: "ABC-1234"
 *                 vendas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 */
router.post('/', carroController.createCarro);

/**
 * @swagger
 * /carros/{id}:
 *   put:
 *     summary: Atualiza um carro existente
 *     description: Atualiza as informações de um carro no banco de dados.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do carro que será atualizado
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *               preco:
 *                 type: number
 *                 format: float
 *               placa:
 *                 type: string
 *     responses:
 *       200:
 *         description: Carro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                   type: string
 *                 preco:
 *                   type: number
 *                   format: float
 *                 placa:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Carro não encontrado
 */
router.put('/:id', carroController.updateCarro);

/**
 * @swagger
 * /carros/{id}:
 *   delete:
 *     summary: Deleta um carro pelo ID
 *     description: Deleta um carro do banco de dados e retorna o carro deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do carro a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Carro deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                   type: string
 *                 preco:
 *                   type: number
 *                   format: float
 *                 placa:
 *                   type: string
 *       400:
 *         description: Erro ao tentar deletar o carro
 *       404:
 *         description: Carro não encontrado
 */
router.delete('/:id', carroController.deleteCarro);

/**
 * @swagger
 * /carros/{placa}:
 *   get:
 *     summary: Busca um carro pela placa
 *     description: Retorna os detalhes de um carro específico utilizando a placa.
 *     parameters:
 *       - name: placa
 *         in: path
 *         description: Placa do carro a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                   type: string
 *                 preco:
 *                   type: number
 *                   format: float
 *                 placa:
 *                   type: string
 *       404:
 *         description: Carro não encontrado
 */
router.get('/:placa', carroController.buscarCarro);

/** 
* @swagger
* /carros:
*   get:
*     summary: Retorna a lista de todos os carros
*     responses:
*        200:
*          description: Lista de carros
*
*
*
*

*/
router.get('/',carroController.buscarTodosCarros);

module.exports = router;
