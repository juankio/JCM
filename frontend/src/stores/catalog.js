// stores/catalog.js
import { ref } from 'vue';
import { defineStore } from 'pinia';
import CatalogAPI from '@/api/CatalogAPI';

export const useCatalogStore = defineStore('catalog', () => {
  const services = ref([]);

  const fetchServices = async () => {
    try {
      const { data } = await CatalogAPI.getServices();
      services.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateServices = async (updatedServices) => {
    try {
      await CatalogAPI.updateServices(updatedServices);
      await fetchServices();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    services,
    fetchServices,
    updateServices,
  };
});
