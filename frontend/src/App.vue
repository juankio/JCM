<template>
  <div class="md:flex h-screen">
    <!-- Contenedor izquierdo fijo en pantallas medianas y grandes -->
    <div
      class="w-full md:w-1/3 h-auto md:h-screen bg-center bg-no-repeat bg-cover relative flex flex-col justify-start md:fixed"
      style="background-size: 120%;">

      <!-- Barra de navegación -->
      <div class="w-full bg-black py-2">
        <nav class="flex gap-2 justify-around">
          <RouterLink v-if="route.name !== 'about'" :to="{ name: 'about' }"
            class="p-3 text-gray-200 uppercase text-base font-black rounded-lg transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105"
            :class="route.name === 'about' ? 'bg-green-700 text-white' : 'text-white'">
            ¿Quienes somos?
          </RouterLink>
          <RouterLink v-else :to="{ name: 'my-appointments' }"
            class="p-3 text-gray-200 uppercase text-base font-black rounded-lg transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105"
            :class="route.name === 'my-appointments' ? 'bg-green-700 text-white' : 'text-white'">
            Regresar
          </RouterLink>

          <RouterLink v-if="route.name !== 'galeria'" :to="{ name: 'galeria' }"
            class="p-3 text-gray-200 uppercase text-base font-black rounded-lg transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105"
            :class="route.name === 'galeria' ? 'bg-green-700 text-white' : 'text-white'">
            Nuestra Galeria
          </RouterLink>

          <RouterLink v-else :to="{ name: 'my-appointments' }"
            class="p-3 text-gray-200 uppercase text-base font-black rounded-lg transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105"
            :class="route.name === 'my-appointments' ? 'bg-green-700 text-white' : 'text-white'">
            Regresar
          </RouterLink>
        </nav>
      </div>

      <!-- Contenedor de la imagen centrado -->
      <div class="flex-grow flex items-center justify-center">
        <div class="relative group">
          <img class="bg-app" src=".././public/img/logo.jpeg" alt="Logo" style="max-height: 50%;">
        </div>
      </div>
    </div>

    <!-- Contenedor derecho -->
    <div class="w-full md:w-2/3 md:ml-auto px-10 py-5 overflow-auto h-screen">
      <router-view />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
