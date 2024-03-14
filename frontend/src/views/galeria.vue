<template>
    <div class="container mx-auto p-8">
      <h1 class="text-5xl font-bold text-white text-center mb-8">Galería de Imágenes</h1>
  
      <h2 class="text-3xl font-bold text-white text-center uppercase my-8">Nuestros Mejores Productos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="'product-' + index" class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
      </div>
  
      <h2 class="text-3xl font-bold text-white text-center uppercase my-8">Nuestras Instalaciones</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images2" :key="'facility-' + index" class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
      </div>
  
      <h2 class="text-3xl font-bold text-white text-center uppercase my-8">nuestro personal</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images3" :key="'facility-' + index" class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white text-center uppercase my-8">NUESTRO esenarios</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="'facility-' + index" class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white text-center uppercase my-8">Título 5</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="'facility-' + index" class="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";

    const images=ref ([
  {
    "url": "https://picsum.photos/1200/800/?random=1",
    "alt": "Imagen aleatoria 1"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=2",
    "alt": "Imagen aleatoria 2"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=3",
    "alt": "Imagen aleatoria 3"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=4",
    "alt": "Imagen aleatoria 4"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=5",
    "alt": "Imagen aleatoria 5"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=6",
    "alt": "Imagen aleatoria 6"
  }
])
    const images2=ref ([
  {
    "url": "https://picsum.photos/1200/800/?random=7",
    "alt": "Imagen aleatoria 1"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=8",
    "alt": "Imagen aleatoria 2"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=9",
    "alt": "Imagen aleatoria 3"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=10",
    "alt": "Imagen aleatoria 4"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=11",
    "alt": "Imagen aleatoria 5"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=12",
    "alt": "Imagen aleatoria 6"
  }
])
    const images3=ref ([
  {
    "url": "https://picsum.photos/1200/800/?random=13",
    "alt": "Imagen aleatoria 1"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=14",
    "alt": "Imagen aleatoria 2"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=15",
    "alt": "Imagen aleatoria 3"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=16",
    "alt": "Imagen aleatoria 4"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=17",
    "alt": "Imagen aleatoria 5"
  },
  {
    "url": "https://picsum.photos/1200/800/?random=18",
    "alt": "Imagen aleatoria 6"
  }
])
  </script>
  
  <style>
  /* Puedes agregar tus estilos personalizados aquí si es necesario */
  </style>
  