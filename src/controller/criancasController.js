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
const updateCriancas = async (req, res) => {

    try {

    const { name, age, clothesSize, shoe, gender } = req.body

      const updateCriancas = await CriancasModel.findByIdAndUpdate(req.params.id,{
        name, age, clothesSize, shoe, gender
      });

      const updatedCriancas = await CriancasModel.findById(req.params.id)
      res.status(200).json(updateCriancas)

      res.status(201).json({ message: "Criança successfully update", updateCriancas });
    } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};
const deleteConsole = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteConsole = await ConsolesModel.findByIdAndDelete(id);
      const message = `Console with id ${deleteConsole.name} was successfully deleted`;
      res.status(200).json({ message });
    } catch (error){
      console.error(error);
      res.status(500).json({ message: error.message });
    };
  };
  const deleteCriancasById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCriancasById = await CriancasModel.findByIdAndDelete(id);
      const message = `Criancas with id ${deleteCriancasById.name} was successfully deleted`;
      res.status(200).json({ message });
    } catch (error){
      console.error(error);
      res.status(500).json({ message: error.message });
    };
  };

 
module.exports = {
  findAllCriancas,
  findCriancaById,
  addNewCrianca,
  updateCriancas,
  deleteCriancasById

}

