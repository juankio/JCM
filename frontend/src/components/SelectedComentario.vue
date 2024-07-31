<template>
  <div class="relative space-y-2 space-x-5 rounded-lg cursor-pointer group"
    :class="{ 'bg-white text-white': appointmets.isServiceSelected(service._id), 'bg-white': !appointmets.isServiceSelected(service._id) }">

    <div class="p-5">
      <p class="text-2xl font-bold">{{ service.name }}</p>
      <p class="mt-5 text-sm font-light">{{ service.description }}</p>
      <RouterLink type="button" :to="{ name: 'todo-comentario', params: { servicioId: service._id } }"
        class="w-50/ bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-5 text-center transition-all duration-300">
        Comentar
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAppointmentsStore } from '@/stores/appointments'

const appointmets = useAppointmentsStore()
defineProps({
  service: {
    type: Object
  }
})
</script>