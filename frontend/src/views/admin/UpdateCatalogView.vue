<template>
    <div class="p-5 space-y-3 rounded-lg shadow-md">
        <h1 class="text-2xl font-black text-green-500 mb-6">Actualizar Catálogo</h1>
        <form @submit.prevent="updateCatalog">
            <div v-for="service in services" :key="service._id"
                class="p-4 mb-4 border bg-white border-gray-300 rounded-lg shadow-sm">
                <div class="mb-4">
                    <label class="block text-xl font-black text-green-600">Nombre del Servicio</label>
                    <input type="text" v-model="service.name"
                        class="w-full  p-3 border border-green-500 bg-white rounded-lg" />
                </div>
                <div class="mb-4">
                    <label class="block text-xl font-black text-green-600">Precio del Servicio</label>
                    <input type="number" v-model="service.price"
                        class="w-full  p-3 border border-green-500 bg-white rounded-lg" />
                </div>
                <button type="submit"
                    class="bg-green-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none">
                    Actualizar servicio
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { useCatalogStore } from '@/stores/catalog';

const toast = inject('toast')
const catalogStore = useCatalogStore();
const services = ref([]);

onMounted(async () => {
    await catalogStore.fetchServices();
    services.value = catalogStore.services;

});

const updateCatalog = async () => {
    await catalogStore.updateServices(services.value);
    toast.success('Servicio actualizado correctamente!');
};


</script>

<style scoped>
/* estilos adicionales si es necesario */
</style>