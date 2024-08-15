<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white mt-10">Nuestros servicos para comentarios</h2>
        <p class="text-white text-lg mt-5"> A continuacion elige un servio para ver sus comentarios</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <ServiceItem v-for="service in store.services" :key="service._id" :service="service" />
        </div>

    </div>
</template>

<script setup>
import ServiceItem from '@/components/SelectedComentario.vue';
import { useServicesStore } from '@/stores/services';



const store = useServicesStore()


</script>