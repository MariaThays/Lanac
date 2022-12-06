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

       

 
module.exports = {
  findAllCriancas,
  findCriancaById,

}
