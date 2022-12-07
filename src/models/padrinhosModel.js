const mongoose = require ('mongoose')

const padrinhoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    fullName:{
        type: String, 
        required: true,  
    },

    telephoneOrWhatsapp:{
        type: Number,
        required: true
    },

    adress:{
        type: String,
        required: true
    },

    email:{
        type: Boolean,
        required: true

    },
    
    gender:{
        type: String,
        default: "Não informado"
    }
    
    
}, {timestamps: true})

const Model = mongoose.model('padrinho',padrinhoSchema)

module.exports = Model

