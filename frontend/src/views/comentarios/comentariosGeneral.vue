<template>
   <div>
     <h2 class="text-4xl font-extrabold text-white mt-10">Nuestros servicos para comentarios</h2>
     <p class="text-white text-lg mt-5"> A continuacion elige un servio para ver sus comentarios</p>
     <p v-if="comentarios.noComment" class="text-white text-2xl text-center">No hay comentarios</p>
     <div v-else class="grid grid-cols-2 gap-5 mt-5">
    <comentariosGeneral
        v-for="comentarios in comentarios.conmentarios" 
        :key="comentarios._id"
        :comentarios="comentarios"
    />
</div>
</div>
     
</template>

<script setup>
   import comentariosGeneral from '@/components/comentariosGeneral.vue';
   import {useComentariosStore} from '@/stores/comentarios';
  
  
 
   
   const comentarios = useComentariosStore()
</script>

