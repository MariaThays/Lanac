const CriancasModel = require('../models/criancasModel')

const findAllCriancas = async (req, res) => {

  try { 
    const allCriancas = await CriancasModel.find()
    res.status(200).json(allCriancas)

  }
   catch {

    console.log(error);
    res.status(500).json({ message: error.message })

  };
};

const findCriancaById = async (req, res) => {

  try {
    const findCrianca = await CriancasModel.findById(req.params.id)
    if (findCrianca == null) {

      res.status(404).json({ message: 'Criança não encontrada' })
    }

    res.status(200).json(findCrianca)
      }
       catch {
    console.log (error);
    res.status(500).json({ message: error.message })
  };
};

const addNewCrianca = async (req, res) => {

    try {

    const { name, age, clothesSize, shoe, gender } = req.body

      const newCrianca = new CriancasModel({
        name, age, clothesSize, shoe, gender
      })

      const savedCrianca = await newCrianca.save();

      res.status(201).json({ message: "New crianca successfully added", savedCrianca });
    } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};



 
module.exports = {
  findAllCriancas,
  findCriancaById,
  addNewCrianca

}

