<template>
    <div class=" bg-white p-5 space-y-3 rounded-lg">
        <p class="text-green-600 font-black">
            Fecha: <span class="font-light text-gray-600">{{ displayDate(appointment.date) }}</span>
            Hora: <span class="font-light text-gray-600">{{ appointment.time }}</span></p>
        <p class="text-lg font-black">Servicios Solicitados en la cita</p>
        <div v-for="service in appointment.services" :key="service.name">
            <p>{{ service.name }}</p>
            <p class="text-2xl font-black text-green-600">{{ formatCurrenCy(service.price) }}</p>
        </div>

        <p class="text-2xl font-black text-right"> Total a pagar: <span class="text-green-600">{{
                formatCurrenCy(appointment.totalAmount) }}</span></p>

        <div class="flex gap-2 items-center">
            <RouterLink class="bg-slate-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none"
                :to="{ name: 'edit-appointment', params: { id: appointment._id } }">
                Editar Cita
            </RouterLink>
            <button class="bg-red-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md: flex-none"
                @click="appointments.cancelAppointment(appointment._id)">
                Cancelar Cita
            </button>
        </div>
    </div>
</template>

<script setup>
import { displayDate } from '@/helpers/date'
import { formatCurrenCy } from '@/helpers'
import { useAppointmentsStore } from '@/stores/appointments';


const appointments = useAppointmentsStore()
defineProps({
    appointment: {
        type: Object
    }
})
</script>
