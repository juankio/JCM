<template>
    <div>
        <p class="text-white text-lg mt-5">
            A continuación podrás administrar tus próximas citas
        </p>
        
        <p v-if="user.loading" class="text-white text-2xl text-center mt-5">cargando...</p>
        
        <div v-else>
            <p v-if="user.noAppointments" class="text-white text-2xl text-center mt-5">No hay citas</p>

            <div v-else class="grid grid-cols-1 gap-5 mt-10">
                <AdminAppointment 
                  v-for="appointment in user.userAppointment"
                  :key="appointment._id"
                  :appointment="appointment"
                />
            </div>
        </div>

    </div>

</template>

<script setup>
import { useUserStore } from '@/stores/user';
import AdminAppointment from '@/components/AdminAppointment.vue'

const user = useUserStore()


</script>
