<template>
  <div>
    <!-- Botón de menú -->
    <button @click="toggleMenu"
      class="fixed top-4 left-4 z-50 p-2 bg-green-700 text-white rounded-md focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Menú despegable -->
    <div :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed inset-y-0 left-0 w-64 pt-10 bg-gray-800 text-white transition-transform transform z-40">
      <div class="p-4">
        <RouterLink v-if="route.name !== 'about'" :to="{ name: 'about' }" class="block py-2 px-4 hover:bg-gray-700">
          ¿Quienes somos?
        </RouterLink>
        <RouterLink v-else :to="{ name: 'my-appointments' }" class="block py-2 px-4 hover:bg-gray-700">
          Regresar
        </RouterLink>
        <RouterLink v-if="route.name !== 'galeria'" :to="{ name: 'galeria' }" class="block py-2 px-4 hover:bg-gray-700">
          Nuestra Galeria
        </RouterLink>
        <RouterLink v-else :to="{ name: 'my-appointments' }" class="block py-2 px-4 hover:bg-gray-700">
          Regresar
        </RouterLink>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="md:flex h-screen">
      <div
        class="w-full h-auto md:h-auto bg-center bg-no-repeat bg-cover md:w-1/3 relative flex flex-col items-center justify-center"
        style="background-size: 120%;">
        <div class="relative group">
          <img class="bg-app" src=".././public/img/logo.jpeg" alt="Logo">
        </div>
      </div>
      <div class="md:w-2/3 px-10 py-5 min-h-full">
        <router-view />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
      </div>
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
