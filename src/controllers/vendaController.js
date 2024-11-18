const prisma = new (require('@prisma/client').PrismaClient)();

const createVenda = async (req, res) => {
  const { funcionarioId, compraId, carros } = req.body;
  try {
    const venda = await prisma.venda.create({
      data: {
        funcionarioId,
        compraId,
        carros: {
          create: carros.map((carroId) => ({
            carroId,
          })),
        },
      },
    });
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createVenda };
