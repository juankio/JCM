import {ref,computed, onMounted,inject, watch } from 'vue'
import { defineStore } from "pinia";
import AppointmentAPI from '@/api/AppointmentAPI';
import { convertToISO, converToDDMMYYYY } from '@/helpers/date';
import { useRouter } from 'vue-router';
import { useUserStore } from './user';

export const useAppointmentsStore= defineStore('appointments', ()=>{

    const appointmentId= ref('')
    const services= ref([])
    const date= ref('')
    const time=ref('')
    const loading = ref(false);

    const toast = inject('toast')
    const hours=ref([])
    const router = useRouter()
    const appointmentByDate = ref([])
    const User = useUserStore()

    onMounted(()=>{
        const startHour= 10
        const endHour= 19
        for (let hour = startHour; hour <= endHour; hour++) {
           
            hours.value.push(hour+':00')
            
        }
    })
    watch(date,async()=>{
        time.value= ''
        if (date.value === '') return
        const {data}= await AppointmentAPI.getByData(date.value)
        appointmentByDate.value= data
        console.log(data)
        if (appointmentId.value) {
            appointmentByDate.value= data.filter(appointment =>appointment._id !== appointmentId.value)
            time.value = data.filter(appointment =>appointment._id === appointmentId.value)[0].time
            
        }else{
            console.log('nuevo')
            
        }
        
    })
    function setSelectedAppointment(appointment){
        console.log(appointment)
        services.value= appointment.services
        date.value = converToDDMMYYYY(appointment.date)
        time.value= appointment.time
        appointmentId.value = appointment._id
        
    }
   
    function onServiceSelected(service){
        if ( services.value.some(selecService =>selecService._id=== service._id)) {
            services.value= services.value.filter(selecService =>selecService._id !== service._id)    
        }else{
            if (services.value.length === 2) {
                toast.open({
                    message:'Solo se pueden escoger 2 productos',
                    type:'error'
                })
                return
            }
            services.value.push(service)
        }
        
    }
    async function saveAppointment() {
        loading.value = true;  
        const appointment = {
            services: services.value.map(service => service._id),
            date: convertToISO(date.value),
            time: time.value,
            totalAmount: totalAmount.value
        };

        try {
            let data;
            if (appointmentId.value) {
                ({ data } = await AppointmentAPI.updete(appointmentId.value, appointment) )
            } else {
                ({ data } = await AppointmentAPI.create(appointment));
            }
            toast.open({
                message: data.msg,
                type: 'success'
            });
            clearAppointmentDate();
            User.getUserAppointments();
            router.push({ name: 'my-appointments' });
        } catch (error) {
            console.error(error);
            toast.open({
                message: 'Error al guardar la cita',
                type: 'error'
            });
        } finally {
            loading.value = false;  
        }
    }


    function clearAppointmentDate(){
        appointmentId.value=''
        services.value= []
        date.value=''
        time.value=''
    }

    async function cancelAppointment(id){
        if (confirm('¿Deseas cancelar esta cita?')) {
            
        try {
            const {data} = await AppointmentAPI.delete(id)
            toast.open({
                message:data.msg,
                type:'success'
             })
             User.userAppointment = User.userAppointment.filter(appointment => appointment._id !==id)
        } catch (error) {
            toast.open({
                message:error.response.data.msg,
                type:'error'
             })
        }
        }
    }
    const isServiceSelected= computed(()=>{
        return (id)=>services.value.some(service => service._id === id) 

    })
    const noServicesSelectied =computed(()=>services.value.length==0)

    const totalAmount=computed(()=>{
        return services.value.reduce((total, service)=>total + service.price, 0)
    })
    const isValidReservation=computed(()=>{
        return services.value.length && date.value.length && time.value.length
    })

    const isDateSelected = computed(()=>{
        return date.value ? true : false
    })
    const disableTime = computed(()=>{
        return (hour)=>{
            return appointmentByDate.value.find(appointment => appointment.time === hour)
        }
    })
    return{
        onServiceSelected,
        saveAppointment,
        clearAppointmentDate,
        setSelectedAppointment,
        cancelAppointment,
        loading,
        isServiceSelected,
        services,
        date,
        hours,
        time,
        totalAmount,
        noServicesSelectied,
        isValidReservation,
        isDateSelected,
        disableTime,
    }
})