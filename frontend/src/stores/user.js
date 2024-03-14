import {ref,computed, onMounted } from 'vue'
import { defineStore } from "pinia";
import {useRouter} from 'vue-router'
import AuthAPI from '@/api/AuthAPI';
import AppointmentAPI from '@/api/AppointmentAPI';

export const useUserStore= defineStore('user', ()=>{
    const user= ref({})
    const router = useRouter()
    const userAppointment= ref([])
    const loading = ref(true)

    onMounted(async()=>{
        try {
            const {data} = await AuthAPI.auth()
            user.value= data    
            await getUserAppointments()    
        } catch (error) {
            console.log(error)
        }finally{
            loading.value = false
        }
    })
    async function getUserAppointments(){
        const {data}= await AppointmentAPI.getUserAppointments(user.value._id)
        userAppointment.value= data    
    }
    function logout(){
        localStorage.removeItem('AUTH_TOKEN')
        user.value = {}
        router.push({name:'login'})
    }

    const getUserName = computed(()=>user.value?.name ?user.value?.name : '')
    const noAppointments = computed(()=> userAppointment.value.length === 0)

    return{
        user,
        userAppointment,
        getUserName,
        loading,
        logout,
        getUserAppointments,
        noAppointments
    }
})