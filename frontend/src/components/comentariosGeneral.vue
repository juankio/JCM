<template>
    <div 
      class="relative space-y-2 rounded-lg cursor-pointer group bg-white text-white "
    >
   
    <div class="p-5">
      <div class="flex justify-between mb-2  ">
        <p class=" text-green-600 font-black">
          Nombre: <span class="font-light text-black"> {{ comentarios.nameUsuario }} </span>
        </p>
        <p class="text-green-600 text-right font-black"> 
          Fecha: <span class="font-light text-black"> {{converToDDMMYYYY(comentarios.fecha)}} </span>
        </p>
      </div>
        
      <p class="text-xl text-green-600 font-black">
      Producto: <span class="font-light text-black"> {{  }} </span>
      </p>
      
      <p class="text-xl text-green-600 font-black">
      Comentario: <span class="font-light text-black"> {{ comentarios.coments }} </span>
      </p>
    </div>
  </div>
    
  </template>

<script setup>
import { useRoute } from 'vue-router';
import { converToDDMMYYYY } from '@/helpers/date';

   defineProps({
    comentarios:{
        type:Object
    }
   })
</script>

