import express from 'express';
import { crear, mostrala, actualizar, borrar } from '../controllers/anunciosControllers.js';

const route = express.Router();



route.post('/', crear);
route.get('/', mostrala);
route.put('/:anuncioId', actualizar);
route.delete('/:anuncioId', borrar);


export default route;
