import api from "@/lib/axios";

export default{
    all(){
        return api.get('/coments')
    },
    create(data){
        return api.post('/coments', data)
    },
    getById(id){
        return api.get(`/coments/${id}`)
    }
    // getByData(date){
    //     return api.get(`/appointments?date=${date}`)
    // },
    // getUserAppointments(userId){
    //     return api.get(`/user/${userId}/appointments`)
    // },
    // getById(id){
    //     return api.get(`/appointments/${id}`)
    // },
    // updete(id, data){
    //     return api.put(`/appointments/${id}`, data)
    // },
    // delete(id){
    //     return api.delete(`/appointments/${id}`)
    // }
}