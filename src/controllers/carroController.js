const prisma = new (require("@prisma/client").PrismaClient)();

const createCarro = async (req, res) => {
  const { modelo, preco, placa } = req.body;
  try {
    const carro = await prisma.carro.create({
      data: { modelo, preco, placa },
    });
    res.status(201).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCarro = async (req, res) => {
  const { id } = req.params;
  const { modelo, preco, placa } = req.body;
  try {
    const carro = await prisma.carro.update({
      where: { id: parseInt(id) },
      data: { modelo: modelo, preco: preco, placa: placa },
    });
    res.status(200).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCarro = async (req, res) => {
  const { id } = req.params;
  try {
    const carro = await prisma.carro.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarCarro = async (req, res) => {
  const placa = req.params.placa;
  try {
    const carro = await prisma.carro.findUnique({
      where: { placa: placa },
    });
    res.status(200).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const buscarTodosCarros = async (req, res) => {
  try {
    const carros = await prisma.carro.findMany();
    res.status(200).json(carros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCarro,
  updateCarro,
  deleteCarro,
  buscarCarro,
  buscarTodosCarros,
};
