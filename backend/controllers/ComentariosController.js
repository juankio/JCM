import Comentario from '../models/contentario.js'
import {valideObjetId, handleNotFoundError} from '../utils/index.js'


const createComentario = async(req, res)=>{
    const comentario = req.body;
    comentario.user = req.user._id; // No es necesario convertirlo a cadena
    
    try {
        const newComentario = new Comentario(comentario);
        console.log(newComentario);
        await newComentario.save();
    
        res.json({
            msg: 'Tu comentario se creó correctamente',
        });
    } catch (error) {
    console.log(error)
    res.status(500).json({
        msg: 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.'
    });
    }
}
    
const getComentario= async(req,res)=>{
    try {
        const service = await Comentario.find()
        res.json(service)
    } catch (error) {
        console.log(error)   
        res.status(500).json({ message: 'Error al obtener comentarios.' }); 
        }
    }
const getComentarioServicio= async(req,res)=>{
    try {
        const {services} = req.params;
        console.log(req.params)
        
        const comentarios = await Comentario.find({ services: services } );
        res.json(comentarios);
    } catch (error) {
        console.log(error)    
        res.status(500).json({ message: 'Error al obtener comentarios.' });
        }
    }
        
        // const updateAppointmen = async(req,res)=>{
//     const {id}=   req.params
//     //validar id  
//     if(valideObjetId(id, res)) return
   
//     const appointment = await Appointment.findById(id).populate('services')
//     if(!appointment){
//        return handleNotFoundError('La cita no Existe', res)
    
//    }
//    if(appointment.user.toString() !==  req.user._id.toString()) {
//        const error = new Error('No tienes los permisos')
//        return res.status(403).json({msg:error.message})
//    }
//    const {date, time, totalAmount, services }= req.body
//    appointment.date= date
//    appointment.time= time
//    appointment.totalAmount= totalAmount
//    appointment.services= services
//    try {
//     const result = await appointment.save()
    
//     await sendEmailUpdateAppointment({
//         date:formatDate(result.date),
//         time:result.time
//        })
//     res.json({
//         msg:'Cita Actualizada Correctamente' 
//     })
//    } catch (error) {
//     console.log(error)
    
//    }

// }

export{
    createComentario,
    getComentario,
    getComentarioServicio
}