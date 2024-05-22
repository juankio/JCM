<template>
  <div>

    <div class="md:flex h-screen">
      <div
        class=" w-full h-auto md:h-auto bg-center bg-no-repeat bg-cover md:w-1/3 relative flex flex-col items-center justify-center"
        style="background-size: 120%;">
        <div class="relative group">
          <img class="bg-app" src=".././public/img/logo.jpeg" alt="Logo">
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="text-white text-center grid grid-cols-1 gap-4">
              <RouterLink v-if="route.name !== 'about'" type="button" :to="{ name: 'about' }"
                class="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                ¿Quienes somos?
              </RouterLink>
              <RouterLink v-else type="button" :to="{ name: 'my-appointments' }"
                class="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                Regresar
              </RouterLink>
              <RouterLink v-if="route.name !== 'galeria'" type="button" :to="{ name: 'galeria' }"
                class="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                Nuestra Galeria
              </RouterLink>
              <RouterLink v-else type="button" :to="{ name: 'my-appointments' }"
                class="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                Regresar
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- </div> -->
      <div class="md:w-2/3 px-10 py-5 min-h-full ">
        <router-view />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
const route = useRoute();
</script>
