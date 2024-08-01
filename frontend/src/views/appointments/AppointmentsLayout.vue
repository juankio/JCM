import { RouterView, RouterLink } from 'vue-router';
<template>
    <div>
        <div class="flex justify-between">
            <h1 class="text-2xl lg:text-6xl font-black text-white">JCM Fotos y Videos</h1>
            <div class="flex flex-col space-y-1 ">
                <div class="flex gap-4 items-center justify-end">
                    <p class="text-white  text-right">Hola: {{ user.getUserName }}</p>
                    <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout">
                        Cerrar Session
                    </button>
                </div>

                <nav class="flex gap-2 items-center justify-end">
                    <RouterLink :to="{ name: 'comentario' }"
                        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg "
                        :class="route.name === 'comentario' || route.name === 'new-comentario' || route.name === 'todo-comentario' ? 'bg-green-700 text-white' : 'text-white'">
                        Comentarios
                    </RouterLink>
                    <RouterLink :to="{ name: 'my-appointments' }"
                        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"
                        :class="route.name === 'my-appointments' ? 'bg-green-700 text-white' : ' text-white'">
                        Mis Citas
                    </RouterLink>
                    <RouterLink :to="{ name: 'new-appointment' }"
                        class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg "
                        :class="route.name === 'new-appointment' || route.name === 'appointment-details' ? 'bg-green-700 text-white' : 'text-white'">
                        Nueva Cita
                    </RouterLink>

                </nav>
            </div>
        </div>
        <main>
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router';

const route = useRoute()
const user = useUserStore()
</script>
