import mongoose from "mongoose";

const conmentarioSchema = mongoose.Schema({
    services:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Services'
        }
        ],
    coments:{
        type:String,
        require:true,
        trim:true
    },
    user:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    } ],
    nameUsuario:{
        type:String,
        require:true,
        trim:true
    },
    fecha:{
        type:Date,
        require:true,
    },
})

const Contentario = mongoose.model('Contentarios',conmentarioSchema)

export default Contentario