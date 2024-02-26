import mongoose from "mongoose";


const coneccion = async ()=>{

    try {
        const db = await mongoose.connect(process.env.URL);

        console.log(`Mongo conectado en: ${db.connection.host} - ${db.connection.port}`)
    } catch (error) {
        console.log(error)
    }

}


export default coneccion;
