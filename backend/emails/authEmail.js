import {createTransporter} from '../config/nodemailer.js'

export async function sendEmailVerification({ name,email, token}){
    const transporter = createTransporter(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASSWORD
    )

    //enviar email
    const info= await transporter.sendMail({
        from:'JCMFotosyVideos<JCMFotosyVideos@gmai.com>',
        to:email,
        subject:'JCM Fotos y Videos - confirma tu cuenta',
        text:'JCM Fotos y Videos - confirma tu cuenta',
        html:`<p>Hola: ${name}, confirma tu cuenta en JCM Fotos y Videos</p>
        <p>Tu cuenta esta en procreso de confirmacion, solo debes darle confirmar en el siguente enlace</p>
        <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar cuenta</a>
        <p> si tu no creaste esta cuenta, puedes ignorar ese correo</p>
        `
    })
    
}
export async function sendEmailResetPassword({ name,email, token}){
    const transporter = createTransporter(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASSWORD
    )

    //enviar email
    const info= await transporter.sendMail({
        from:'JCMFotosyVideos<JCMFotosyVideos@gmai.com>',
        to:email,
        subject:'JCM Fotos y Videos - Reestablece tu password',
        text:'JCM Fotos y Videos - Reestablece tu password',
        html:`<p>Hola: ${name}, has solicitado reestablecer tu password</p>
        <p>sigue el siguiente enlace para generar un nuevo password: </p>
        <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Reestablecer Password</a>
        <p> Si tu no solicitaste esto, puedes ignorar ese correo</p>
        `
    })
    
}