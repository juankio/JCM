<template>
    <div 
    class="p-5 space-y-5 rounded-lg cursor-pointer"
    :class="appointmets.isServiceSelected(service._id)? 'bg-green-500 text-white':'bg-white'"
     @click="appointmets.onServiceSelected(service)" >
        <p class="text-2xl font-bold">{{ service.name }}</p>
        <p class="text-sm font-ligh">{{ service.description }}</p>
        <p 
        class="text-4xl font-black "
        :class="appointmets.isServiceSelected(service._id)? ' text-white':'text-green-600'"
        >{{formatCurrenCy(service.price)  }}</p>
    </div>
</template>

<script setup>
import { formatCurrenCy } from '../helpers/index';
import {useAppointmentsStore} from '@/stores/appointments'

    const appointmets= useAppointmentsStore()
   defineProps({
    service:{
        type:Object
    }
   })
</script>

