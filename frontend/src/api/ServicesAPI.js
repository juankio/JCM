import api from "@/lib/axios";

export default{
all(){
    return api.get('/services')
},
servicioId(id){
    return api.get(`/services/${id}`)
}

}

