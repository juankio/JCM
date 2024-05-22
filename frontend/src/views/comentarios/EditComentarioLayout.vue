<template>
    <div>
    <nav class="my-5 flex gap-3">
       <RouterLink 
       :to="{name:'todo-comentario'}"
          class="flex-1 text-center p-3 uppercase font-extrabold  hover:bg-green-600 hover:text-white "
          :class="route.name === 'todo-comentario'? 'bg-green-500 text-white': 'bg-white text-green-500'"
          >
            Comentarios
          </RouterLink>
       <RouterLink 
       :to="{name:'new-comentario'}"
       class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-green-600 hover:text-white "
       :class="route.name === 'new-comentario'? 'bg-green-500 text-white': 'bg-white text-green-500'"
       >
       Añadir comentario
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
 import ComentarioAPI from '@/api/ComentarioAPI';
 import {useComentariosStore} from '@/stores/comentarios'
 
    const route = useRoute()
    const router = useRouter()
    const {servicioId}= route.params

    const comentarios = useComentariosStore()
    
   onMounted(async() => {
      try {
         const {data} = await ComentarioAPI.getById(servicioId)    
         console.log(data)
              
         comentarios.setSelectedAppointment(data)         
      } catch (error) {
         // router.push({name:'my-appointments'})
      }
   })
 </script>
 