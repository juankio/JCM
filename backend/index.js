import express  from "express"
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import {db} from "./config/db.js"
import servicesRoutes from "./routes/servicesRouetes.js"
import authRoutes from "./routes/authRoutes.js"
import appointmentsRoutes from "./routes/appointmentsRoutes.js"
import userRoutes from './routes/userRoutes.js'


//variables de entorno
dotenv.config()

//app
const app = express()

//leer datos body

app.use(express.json())

//conectar a base de datos
db()


//lista de cors
const whitelist=[process.env.FRONTEND_URL, undefined]

//confugurar las cors
const corsOptions={
    origin:function(origin,callback){
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}
app.use(cors(corsOptions))
//ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentsRoutes)
app.use('/api/user', userRoutes)

//port
const PORT= process.env.PORT || 4000

//arranque
app.listen(PORT,()=>{
    console.log(colors.yellow.bold('el servido esta melo port:',PORT))
    
})