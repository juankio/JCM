import Services from '../models/Service.js'
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

const getServices= async(req,res)=>{
   try {
    const service = await Services.find()
    res.json(service)
   } catch (error) {
    console.log(error)
    
   }
   
}

const getServiceById= async(req, res)=>{
    const {id} = req.params    

    if (valideObjetId(id, res))return
    
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('el servicio no existe',res)
    }
    res.json(service)
}

const updateService= async(req,res)=>{
    const {id} = req.params    

   if (valideObjetId(id, res))return

    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('el servicio no existe',res)
    }
    //escribir los nuevos valores
    service.name= req.body.name || service.name
    service.price= req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg:'El servicio se actualizo correctamente'
        })
    } catch (error) {
        console.log(error)
        
    }
}   

const deleteService = async(req, res)=>{
    const {id} = req.params    

   if (valideObjetId(id, res))return

    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('el servicio no existe',res)
    }
    try {
      await service.deleteOne()
      res.json({
        msg:'El servicio se elimino correctamente'
    })
    } catch (error) {
        console.log(error)
    }


}

export {
    getServices,
    createServis,
    getServiceById,
    updateService,
    deleteService
}