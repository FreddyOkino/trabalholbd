const prisma = new (require('@prisma/client').PrismaClient)();

/**
 * Cria um novo funcionário
 */
const createFuncionario = async (req, res) => {
  const { nome } = req.body;

  try {
    const funcionario = await prisma.funcionario.create({
      data: { nome },
    });
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Retorna todos os funcionários
 */
const getAllFuncionarios = async (req, res) => {
  try {
    const funcionarios = await prisma.funcionario.findMany();
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createFuncionario, getAllFuncionarios };
