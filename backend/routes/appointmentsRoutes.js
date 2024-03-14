import express from 'express'
import {createAppointment, getAppointmentsByDate ,getAppointmentById,updateAppointmen, deleteAppointmen} from '../controllers/appointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'


const router = express.Router()
router.route('/')
    .post(authMiddleware,createAppointment)
    .get(authMiddleware,getAppointmentsByDate)

router.route('/:id')
    .get(authMiddleware,getAppointmentById)
    .put(authMiddleware,updateAppointmen)
    .delete(authMiddleware,deleteAppointmen)
export default router