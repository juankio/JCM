import {createTransporter} from '../config/nodemailer.js'

export async function sendEmailNewAppointment({ date,time}){
    const transporter = createTransporter(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASSWORD
    )
 //enviar email
    const info= await transporter.sendMail({
        from:'JCMFotosyVideos<JCMFotosyVideos@gmai.com>',
        to:'admin@admin.com',
        subject:'JCM Fotos y Videos - Nueva cita',
        text:'JCM Fotos y Videos - Nueva cita',
        html:`<p>Hola:Admin tienes nueva cita. </p>
        <p>La cita sera el dia: ${date} a las ${time}horas </p>
        `
    })
}
export async function sendEmailUpdateAppointment({ date,time}){
    const transporter = createTransporter(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASSWORD
    )
 //enviar email
    const info= await transporter.sendMail({
        from:'JCMFotosyVideos<JCMFotosyVideos@gmai.com>',
        to:'admin@admin.com',
        subject:'JCM Fotos y Videos - Cita Actualizada',
        text:'JCM Fotos y Videos - Cita Actualizadaa',
        html:`<p>Hola:Admin un usuario ha modificado una cita. </p>
        <p>La nueva cita sera el dia: ${date} a las ${time}horas </p>
        `
    })
}
export async function sendEmailCancelledAppointment({ date,time}){
    const transporter = createTransporter(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASSWORD
    )
 //enviar email
    const info= await transporter.sendMail({
        from:'JCMFotosyVideos<JCMFotosyVideos@gmai.com>',
        to:'admin@admin.com',
        subject:'JCM Fotos y Videos - Cita Eliminada',
        text:'JCM Fotos y Videos - Cita Eliminada',
        html:`<p>Hola:Admin un usuario ha Eliminado su cita. </p>
        <p>La cita que se elimino es la del: ${date} a las ${time}horas </p>
        `
    })
}
