<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Comentario de </h1>
        <p class="text-2xl text-white text-start my-5">{{ comentarios.servicios.name }}</p>
        <p class="text-2xl text-white text-start my-5">{{ comentarios.servicios.description }}</p>
        <p class="text-2xl text-white text-start my-5">{{ comentarios.nameUser }}</p>

        <p class="text-2xl text-white text-start my-5">Escribe tu comentario</p>
        <FormKit id="loginForm" type="form" :actions="false"
            incomplete-message="No se pude enviar, revisa las notificaciones" @submit="handleSumit">
            <FormKit type="textarea" label="Como te fue con tu experiencia" name="cometario"
                :help="`${comentarios.coments ? comentarios.coments.length : 0} / 120`" v-model="comentarios.coments"
                placeholder="Excelente servicio" validation="required|length:0,120" :validation-messages="{
            required: 'El Comentario es obligatorio',
            length: 'No puede tener más de 120 caracteres',
        }" />

            <FormKit type="submit">
                Enviar
            </FormKit>
        </FormKit>
        <RouterView />
    </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useComentariosStore } from '@/stores/comentarios';
const router = useRouter();
const route = useRoute();
const comentarios = useComentariosStore();
const servicioId = route.params.servicioId;
comentarios.servicio = servicioId;
const handleSumit = async () => {
    try {
        await comentarios.saveAppointment();
        await comentarios.getComentarios(); // Asegúrate de recargar los comentarios después de guardar uno nuevo
        clearComentarioForm(); // Limpiar el formulario después de un envío exitoso
    } catch (error) {
        console.log(error);
    }
};
// Limpiar el formulario de comentario
const clearComentarioForm = () => {
    comentarios.coments = ''; // Limpiar el comentario del store
};
</script>