<template>
  <main class="flex justify-center items-center h-screen">
    <div class="text-center">
      <h1 class="text-2xl lg:text-6xl font-black text-white">JCM Fotos y Videos</h1>
      <p>Somos una empresa con más de 10 años en el mercado.</p>
      <div class="flex flex-col gap-6 items-center justify-center space-y-6 text-center lg:gap-12 lg:space-y-8 xl:grid xl:grid-cols-1 xl:text-left">
        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-green-400 px-3 py-1 text-sm font-bold dark:bg-green-400">Sobre nosotros</div>
          <h1 class="text-4xl font-bold tracking-tighter text-green-700 sm:text-5xl md:text-6xl lg:text-7xl/line-tight">¿Quiénes somos?</h1>
          <p class="max-w-[800px] text-white md:text-xl/relaxed xl:text-base/relaxed dark:text-white">
            JCM Fotos y Videos es una empresa dedicada a capturar los momentos más preciosos y significativos de la vida a través de la lente de una cámara. Nos especializamos en la creación de recuerdos inolvidables a través de fotografías y videos que perduran para siempre.
            En JCM Fotos y Videos, comprendemos la importancia de cada momento especial en la vida de nuestros clientes. Ya sea una boda, un cumpleaños, una graduación o cualquier otro evento importante, estamos comprometidos a capturar cada detalle de manera auténtica y emocionante.
            Nuestro equipo está formado por fotógrafos y videógrafos talentosos y apasionados que trabajan incansablemente para ofrecer un servicio excepcional y resultados de alta calidad. Nos esforzamos por superar las expectativas de nuestros clientes y crear imágenes y videos que cuenten historias únicas y llenas de emoción.
          </p>
        </div>
      </div>
      <RouterLink type="button" :to="{name:'login'}" class="group relative h-12 w-full mt-16 overflow-hidden rounded-lg bg-black text-lg shadow">
      <div class="absolute inset-0 w-3 bg-green-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span class="relative text-green-700  font-bold group-hover:text-white">Login</span>
      </RouterLink>
     
    </div>
  </main>
</template>
<script setup>
import { useRoute } from 'vue-router';
</script>