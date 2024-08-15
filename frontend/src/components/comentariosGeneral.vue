<template>
  <div v-if="comentarios.service" class="relative space-y-2 rounded-lg cursor-pointer group bg-white text-black p-4">
    <div class="mb-2">
      <p class="text-green-600 font-black">
        Nombre: <span class="font-light text-black">{{ comentarios.user.name }}</span>
      </p>
      <p class="text-green-600 font-black">
        Fecha: <span class="font-light text-black">{{ converToDDMMYYYY(comentarios.fecha) }}</span>
      </p>
    </div>

    <p class="text-lg text-green-600 font-black">
      Producto: <span class="font-light text-black">{{ comentarios.service.name }}</span>
    </p>

    <p class="text-lg text-green-600 font-black">
      Comentario: <span class="font-light text-black">{{ comentarios.coments }}</span>
    </p>
  </div>
</template>

<script setup>
import { converToDDMMYYYY } from '@/helpers/date';
defineProps({
  comentarios: {
    type: Object,
    required: true
  }
});
</script>
