<template>
    <div class="p-4">
        <h2 class="text-2xl md:text-4xl font-extrabold text-white mt-5 md:mt-10 text-center md:text-left">Nuestros
            servicios para comentarios</h2>
        <p class="text-white text-md md:text-lg mt-3 md:mt-5 text-center md:text-left">A continuación elige un servicio
            para ver sus comentarios</p>

        <!-- Mostrar mensaje de error si hay un error -->
        <p v-if="comentariosStore.error" class="text-red-500 text-lg md:text-2xl text-center mt-5">{{
            comentariosStore.error }}</p>

        <!-- Mostrar skeletons mientras se cargan los comentarios -->
        <div v-if="comentariosStore.isLoading && !comentariosStore.error"
            class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div v-for="n in 4" :key="n" class="p-4 bg-white rounded shadow-md">
                <div class="skeleton h-6 w-3/4"></div>
                <div class="skeleton h-4 w-1/2 mt-2"></div>
                <div class="skeleton h-4 w-5/6 mt-2"></div>
                <div class="skeleton h-4 w-full mt-2"></div>
            </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div v-if="comentariosStore.getComentariosPorServicio.length === 0"
                class="text-white text-center text-lg md:text-2xl col-span-1 md:col-span-2">
                No hay comentarios disponibles para este servicio.
            </div>
            <comentariosGeneral v-for="comentario in comentariosStore.getComentariosPorServicio" :key="comentario._id"
                :comentarios="comentario" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useComentariosStore } from '@/stores/comentarios';
import comentariosGeneral from '@/components/comentariosGeneral.vue';
const comentariosStore = useComentariosStore();
const route = useRoute();
const servicioId = route.params.servicioId;
onMounted(() => {
    comentariosStore.servicio = servicioId;
    comentariosStore.getComentarios();
});
watch(() => route.params.servicioId, (newServicioId) => {
    comentariosStore.servicio = newServicioId;
    comentariosStore.getComentarios();
});
</script>

<style>
/* Incluir los estilos del skeleton aquí o en un archivo CSS global */
.skeleton {
    background-color: #f3f4f6;
    border-radius: 0.375rem;
    width: 100%;
    height: 1.25rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
}

.skeleton::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    from {
        left: -150px;
    }

    to {
        left: 100%;
    }
}
</style>