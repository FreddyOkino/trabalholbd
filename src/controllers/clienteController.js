const prisma = new (require('@prisma/client').PrismaClient)();

const createCliente = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const cliente = await prisma.cliente.create({
      data: { nome, email, telefone },
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createCliente, getAllClientes };
