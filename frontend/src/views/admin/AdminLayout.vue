<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h1 class="text-2xl lg:text-6xl font-black text-white">JCM Fotos y Videos</h1>
                <h2 class="text-xl mt-3 lg:text-2xl font-black text-white">Panel de Administración</h2>
            </div>
            <div class="flex flex-col space-y-5">
                <div class="flex gap-2 items-center">
                    <p class="text-white text-right">Hola: {{ user.getUserName }}</p>
                    <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>

        <nav class="my-5 flex gap-3">
            <RouterLink :to="{ name: 'admin-appointments' }"
                class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-green-600 hover:text-white "
                :class="route.name === 'admin-appointments' ? 'bg-green-500 text-white' : 'bg-white text-green-500'">
                Ver Citas del Día
            </RouterLink>
            <RouterLink :to="{ name: 'update-catalog' }"
                class="flex-1 text-center p-3 uppercase font-extrabold  hover:bg-green-600 hover:text-white "
                :class="route.name === 'update-catalog' ? 'bg-green-500 text-white' : 'bg-white text-green-500'">
                Actualizar Catálogo
            </RouterLink>
        </nav>
        <main class="space-y-6 mt-6">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRoute, useRouter } from 'vue-router';

const user = useUserStore();
const route = useRoute()

</script>

<style scoped></style>