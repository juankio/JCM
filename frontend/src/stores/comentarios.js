import { ref, computed, onMounted, inject } from 'vue';
import { defineStore } from 'pinia';
import comentarioAPI from '@/api/ComentarioAPI';
import ServicesAPI from '@/api/ServicesAPI';
import { useRouter } from 'vue-router';
import { useUserStore } from './user';

export const useComentariosStore = defineStore('comentarios', () => {
  const servicio = ref('');
  const servicios = ref([]);
  const coments = ref('');
  const comentarios = ref([]);
  const fechaEntrada = ref(new Date());
  const isLoading = ref(false);
  const error = ref(null);

  const User = useUserStore();
  const toast = inject('toast');
  const router = useRouter();

  const fetchServicios = async () => {
    try {
      isLoading.value = true;
      const { data } = await ServicesAPI.servicioId(servicio.value);
      servicios.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const getComentarios = async () => {
    try {
      isLoading.value = true;
      const { data } = await comentarioAPI.all();
      comentarios.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };


  const saveAppointment = async () => {
    const fechaSalida = fechaEntrada.value.toISOString();

    const appointment = {
      services: servicio.value,
      coments: coments.value,
      user: {
        _id: User.user._id,
        email: User.user.email,
        name: User.user.name
      },
      nameUsuario: User.getUserName,
      fecha: fechaSalida
    };

    try {
      if (servicio.value !== '' && coments.value !== '') {
        const { data } = await comentarioAPI.create(appointment);
        toast.open({
          message: data.msg,
          type: 'success'
        });
        clearComentario();
        getComentarios();
        User.getUserAppointments();
        router.push({ name: 'todo-comentario' });
      }
    } catch (err) {
      toast.open({
        message: 'Error desconocido, por favor recargue la página',
        type: 'error'
      });
    }
  };

  const clearComentario = () => {
    servicio.value = '';
    coments.value = '';
    servicios.value = [];
  };

  

  const getComentariosPorServicio = computed(() => {
    return comentarios.value.filter(comentario => comentario.services._id === servicio.value);
  });

  const setSelectedAppointment = (comentario) => {
    comentarios.value = comentario;
  };

  const noComment = computed(() => getComentariosPorServicio.value.length === 0);

  onMounted(() => {
    getComentarios(); // Asegúrate de llamar a esta función al montar el store
  });
  return {
    saveAppointment,
    getComentarios,
    getComentariosPorServicio,
    fetchServicios,
    clearComentario,
    setSelectedAppointment,
    noComment,
    servicio,
    coments,
    servicios,
    comentarios,
    isLoading,
    error
  };
});
