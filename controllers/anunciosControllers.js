import Anuncio from '../models/Anuncio.js'

const crear = async (req, res)=>{

    const datos = new Anuncio(req.body)

    const guardarAnuncio =  await datos.save();
    
    return res.status(200).json({
        msg: 'Todo listo!!',
        guardarAnuncio
    });

}

const mostrala = async (req, res)=>{


    try {
        
        const dato = await Anuncio.find();

        return res.status(200).json({
            msg: dato
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Erro, No Hay nada!!"
        })
    }


}

const actualizar = async (req, res)=>{

    const id = req.params.anuncioId
    const {anuncio, dia, fecha, tema} = req.body;

    try {

        const actualizado = await Anuncio.findOneAndUpdate({_id: id}, {anuncio, dia, fecha, tema}, {new: true});

        if(!actualizado){
            throw new Error('Error')
        }
        
        return res.status(200).json({
            msg: id
        })
    } catch (error) {
        return res.status(500).json({
            msg: "No Hay nada para Actualizar"
        })
        
    }

}


const borrar = async (req, res)=>{

    const {anuncioId} = req.params

    try {

        const anuncioBorrado = await Anuncio.findOneAndDelete({_id: anuncioId});

        if(!anuncioBorrado){
            throw new Error('')
        }
        return res.status(200).json({
            msg: anuncioId,
            texto: "Desde borrar"
        })
        
    } catch (error) {
        return res.status(500).json({
            msg: "No Hay nada para Borrar"
        })
        
    }



}

export{
    crear,
    mostrala,
    actualizar,
    borrar
}

