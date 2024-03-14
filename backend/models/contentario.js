import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
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
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Services = mongoose.model('Contentarios',servicesSchema)

export default Services