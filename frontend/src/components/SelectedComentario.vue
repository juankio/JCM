<template>
    <div 
      class="relative space-y-2 space-x-5 rounded-lg cursor-pointer group  "
      :class="{ 'bg-white text-white': appointmets.isServiceSelected(service._id), 'bg-white': !appointmets.isServiceSelected(service._id) }"
    >
    <div class="absolute w-full h-full  p-5 rounded-lg flex justify-center items-center group-hover:bg-black  group-hover:bg-opacity-50" >
      <RouterLink   type="button" :to="{ name: 'todo-comentario', params: { servicioId: service._id } }" class="hidden w-25 text-center bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 group-hover:flex">
          Comentar
        </RouterLink>
    </div>
<div class="p-5">
  <p class="text-2xl font-bold">{{ service.name }}</p>
  <p class="text-sm font-light">{{ service.description }}</p>
</div>

  </div>
    
  </template>

<script setup>
import { useRoute } from 'vue-router';
import {useAppointmentsStore} from '@/stores/appointments'

    const appointmets= useAppointmentsStore()
    defineProps({
      service:{
          type:Object
      }
    })
</script>

