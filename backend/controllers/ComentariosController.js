import Comentario from '../models/contentario.js'
import {valideObjetId, handleNotFoundError} from '../utils/index.js'


const createServis= async(req,res)=>{
    if(Object.values(req.body).includes('')){
        const error= new  Error('Todos los campos son obligatorios')
         return res.status(400).json({
            msg:error.message
        })
    }
    try {
        const services=new Services(req.body)
         await services.save()       
         res.json({
            msg:"El servicio se creo correctamente"
         })
    } catch (error) {
        console.log(error)
        
    }
}