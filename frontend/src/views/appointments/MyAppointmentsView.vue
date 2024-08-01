<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Mis Citas</h1>
        <p class="text-2xl text-white text-center my-5">A continuacion podras administrar tus proximas cita</p>

        <p v-if="user.loading" class="text-white text-2xl text-center mt-5">cargando...</p>

        <div v-else>
            <p v-if="user.noAppointments" class="text-white text-2xl text-center mt-5">No hay citas</p>

            <div v-else class="grid grid-cols-1 gap-5 mt-10">
                <Appointment v-for="appointment in user.userAppointment" :key="appointment._id"
                    :appointment="appointment" />
            </div>
        </div>

    </div>
</template>

<script setup>
import Appointment from '@/components/Appointment.vue'
import { useUserStore } from '@/stores/user'


const user = useUserStore()

</script>
