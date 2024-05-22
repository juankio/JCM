<template>
  <div>
    <!-- Contenido de tu página principal -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/auth/login');
  });
});
</script>
