<template>
    <div>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Iniciar Sesion</h1>
        <p class="text-2xl text-white text-center my-5">Si tienes una cuenta, inicia sesion</p>

        <FormKit id="loginForm" type="form" :actions="false"
            incomplete-message="No se pude enviar, revisa las notificaciones" @submit="handleSumit">
            <FormKit type="email" label="Email" name="email" placeholder="Email de Usuario" validation="required|email"
                :validation-messages="{
            required: 'El Email es obligatorio',
            email: 'Email no valido'
        }" />
            <FormKit type="password" label="Constraseña" name="password" placeholder="Contraseña de Usuario"
                validation="required" :validation-messages="{
            required: 'El password es obligatorio',
        }" />

            <FormKit type="submit">
                <p class="text-3xl">Iniciar sesion</p>
            </FormKit>
        </FormKit>
        <RouterView />
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router';
import AuthAPI from '@/api/AuthAPI';



const toast = inject('toast')
const router = useRouter()

const handleSumit = async (formData) => {
    try {
        const { data: { token } } = await AuthAPI.login(formData)
        localStorage.setItem('AUTH_TOKEN', token)
        router.push({ name: 'my-appointments' })
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }

}
</script>