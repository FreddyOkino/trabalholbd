const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const prisma = require('@prisma/client').PrismaClient;

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Swagger Setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Loja de Carros API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'], // Caminho para as rotas
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Definindo as rotas
const clienteRoutes = require('./routes/clienteRoutes');
const vendaRoutes = require('./routes/vendaRoutes');
const carroRoutes = require('./routes/carroRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');

app.use('/clientes', clienteRoutes);
app.use('/vendas', vendaRoutes);
app.use('/carros', carroRoutes);
app.use('/funcionarios', funcionarioRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
