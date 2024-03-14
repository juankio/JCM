import express from "express";
import {getServices, createServis, getServiceById, updateService, deleteService} from '../controllers/servicesController.js'
import {getComentario, createComentario, getComentarioById, updateComentario, deleteComentario} from '../controllers/ComentariosController.js'


const router = express.Router()

router.route('/')
    .post(createServis)
    .get(getServices)
    
router.route('/:id')
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService)


export default router
