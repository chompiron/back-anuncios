import mongoose from "mongoose";


const anunciosSchema = new mongoose.Schema({

    anuncio:{
        type: String,
        required: true,
    },
    dia:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    tema:{
        type: String,
        required: true
    }

});

const Anuncios = mongoose.model('Anuncios', anunciosSchema);

export default Anuncios;


