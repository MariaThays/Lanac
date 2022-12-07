const mongoose = require ('mongoose')

const criancaSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        type: String, 
        required: true,
        
    },

    age:{
        type: Number,
        required: true,
    },

    clothesSize:{
        type: String,
        required: true,
        
    },

    shoe:{
        type: Number,
        required: true,   
    },
    
    gender:{
        type: String,
        default: "Não informado"

    }
    
},{timestamps:true})

const Model = mongoose.model('crianca',criancaSchema)

module.exports = Model
