<template>
   <div>
      <nav class="my-5 flex gap-3">
         <RouterLink :to="{ name: 'edit-appointment' }"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-green-600 hover:text-white "
            :class="route.name === 'edit-appointment' ? 'bg-green-500 text-white' : 'bg-white text-green-500'">
            Servicios
         </RouterLink>
         <RouterLink :to="{ name: 'edit-appointment-details' }"
            class="flex-1 text-center p-3 uppercase font-extrabold  hover:bg-green-600 hover:text-white "
            :class="route.name === 'edit-appointment-details' ? 'bg-green-500 text-white' : 'bg-white text-green-500'">
            Cita y Resumen
         </RouterLink>
      </nav>
      <div class="space-y-5">
         <RouterView></RouterView>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppointmentAPI from '@/api/AppointmentAPI';
import { useAppointmentsStore } from '@/stores/appointments'

const route = useRoute()
const router = useRouter()
const { id } = route.params
const appointments = useAppointmentsStore()

onMounted(async () => {
   try {
      const { data } = await AppointmentAPI.getById(id)
      appointments.setSelectedAppointment(data)
   } catch (error) {
      router.push({ name: 'my-appointments' })
   }
})
</script>