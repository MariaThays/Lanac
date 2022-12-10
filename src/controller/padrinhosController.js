const { find } = require('../models/padrinhosModel');
const padrinhosModel = require('../models/padrinhosModel')


const addNewPadrinho = async (req, res) => {
  try {
    const { name, telephoneOrWhatsapp, adress, email, gender } = req.body

    const newPadrinho = new padrinhosModel({
      name, telephoneOrWhatsapp, adress, email, gender
    }

    )
    const savedPadrinho = await newPadrinho.save();

    res.status(200).json({ message: "Padrinho adicionado com sucesso!", savedPadrinho });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updatePadrinhos = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, telephoneOrWhatsapp, adress, email, gender } = req.body;
    const findPadrinhos = await padrinhosModel.findById(id);
    if (findPadrinhos == null) {
      res.status(404).json({ message: "Padrinho não encontrado" });
    };

    findPadrinhos.name = name || findPadrinhos.name;
    findPadrinhos.telephoneOrWhatsapp = telephoneOrWhatsapp || findPadrinhos.telephoneOrWhatsapp;
    findPadrinhos.adress = adress || findPadrinhos.adress;
    findPadrinhos.email = email || findPadrinhos.email;
    findPadrinhos.gender = gender || findPadrinhos.gender;
    
    const savedPadrinho = await findPadrinhos.save();
    res.status(200).json({ message: "Padrinho atualizado com sucesso", savedPadrinho });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const deletePadrinhoById = async (req, res) => {
  try {
    const { id } = req.params;
    const findPadrinho = await padrinhosModel.findById(id);

    if (findPadrinho == null) {
      return res.status(404).json({ message: `Padrinho com o ${id} não encontrado` })
    };
    await findPadrinho.remove();
    res.status(200).json({ message: `Padrinho com id ${id} foi deletado com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const findAllPadrinhos = async (req, res) => {
  try {
    const allPadrinhos = await padrinhosModel.find()
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const findPadrinhoById = async (req, res) => {
  try {
    const findPadrinhoById = await padrinhosModel.findById(req.params.id)
    
    if (findPadrinhoById == null) {
      res.status(404).json({ message: "Padrinho não encontrado" });
    }
    res.status(200).json(findPadrinhoById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};
module.exports = {

  addNewPadrinho,
  updatePadrinhos,
  deletePadrinhoById,
  findAllPadrinhos,
  findPadrinhoById
}




