<template>
          <div 
          class="bg-white p-5 space-y-3 rounded-lg"
          >
                <p class="text-green-600 font-black">
                    Fecha: <span class="font-light text-gray-600"> {{ displayDate( appointment.date ) }} </span>
                    Hora: <span class="font-light text-gray-600"> {{ appointment.time }} Horas.</span>
                </p>

                <p class="text-green-600 font-black">
                    Nombre Cliente: <span class="font-light text-gray-600"> {{ appointment.user.name }} </span>
                </p>
                <p class="text-green-600 font-black"> 
                    Email: <span class="font-light text-gray-600"> {{ appointment.user.email }} </span>
                </p>

                <p class="text-lg font-black">Servicios Solicitados en la cita</p>
                <div v-for="service in appointment.services" :key="service.name">
                    <p>{{ service.name }}</p>
                    <p class="text-2xl font-black text-green-600">{{ formatCurrenCy( service.price ) }}</p>
                </div>

                <p class="text-2xl font-black text-right">
                    Total a pagar: <span class="text-green-600"> {{ formatCurrenCy( appointment.totalAmount ) }} </span>
                </p>
            </div>
</template>
<script setup>
import {displayDate} from '@/helpers/date'
import {formatCurrenCy} from '@/helpers'
          
defineProps({
    appointment:{
        type:Object
    }
})
      
</script>