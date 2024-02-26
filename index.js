import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import route from './router/index.js';
import coneccion from './config/db.js';

dotenv.config();

const app = express();

app.use(cors())

coneccion()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/app', route)



const port = process.env.PORT || 4000;

app.listen(port,()=>{

    console.log(`Funciona en el puerto ${port}`)

})
