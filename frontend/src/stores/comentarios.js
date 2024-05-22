import {ref,computed, onMounted,inject, watch } from 'vue'
import { defineStore } from "pinia";
import comentarioAPI from "@/api/ComentarioAPI"
import ServicesAPI from '@/api/ServicesAPI';
import { converToDDMMYYYY } from '@/helpers/date';
import { useRouter } from 'vue-router';
import { useUserStore } from './user';

export const useComentariosStore= defineStore('comentarios', ()=>{
    const appointmentId= ref('')
    const servicio= ref('')
    const servicios= ref([])
    const coments= ref('')
    const usuario= ref({})
    const fechaEntrada= ref(new Date())
    // comentarios generales
  
    const conmentarios= ref([])
    

    const User = useUserStore()
    const toast = inject('toast')
    const router = useRouter()
    
    onMounted(async() => {
        try {
            const {data} = await  ServicesAPI.servicioId(servicio.value)
            servicios.value= data
         
            
        } catch (error) {
            console.log(error)
            
        }
    })

    async function saveAppointment(){
        const fechaSalida= fechaEntrada.value.toISOString();
        
        const appointment = {
            services: servicio.value,
            coments: coments.value,
            user: {
              _id: User.user._id,
              email: User.user.email,
              name: User.user.name
            },
            nameUsuario: User.getUserName,
            fecha: fechaSalida
          };
          
          try {
            if (servicio.value !== '' && coments.value !== '') {
              console.log(appointment);
          
              const { data } = await comentarioAPI.create(appointment);
          
              toast.open({
                message: data.msg,
                type: 'success'
              });
            }
          
            } catch (error) {
                return toast.open({
                    message:'error desconocido porfavor recargue la pagina' ,
                   type:'error'
                })  
            }
        clearComentario()
        getComentarios()
        User.getUserAppointments()
                 router.push({name:'my-appointments'})
    }
    function clearComentario() {
        appointmentId.value = '';
        servicio.value = '';
        servicios.value = [];
        coments.value = '';
    }
    async function getComentarios (){
        
    }
    function setSelectedAppointment(comentario){
        conmentarios.value= comentario
        
    }
    const noComment =computed(()=>conmentarios.value.length==0)

    return{
        saveAppointment,
        clearComentario,
        setSelectedAppointment,
        noComment,
        appointmentId,
        servicio,
        coments,
        servicios,
        conmentarios,
    }
})