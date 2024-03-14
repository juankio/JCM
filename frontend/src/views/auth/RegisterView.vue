<template>
    <div>
    <h1 class="text-6xl font-extrabold text-white text-center mt-10">Crea una cuenta</h1>
    <p class="text-2xl text-white text-center my-5">Crea una cuenta en JCM Fotos y Videos</p>
    
    <FormKit
    id="registerForm"
    type="form"
    :actions="false"
    incomplete-message="No se pude enviar, revisa las notificaciones"
    @submit="handleSumit"
    >
        <FormKit
        type="text"
        label="Nombre"
        name="name"
        placeholder=" Tu nombre"
        validation="required|length:3"
        :validation-messages="{
            required:'El Nombre es obligatorio',
            length:'El nombre es muy corto'
        }"
        />
        <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Email de Registro"
        validation="required|email"
        :validation-messages="{
            required:'El Email es obligatorio',
            email:'Email no valido'
        }"
        />
        <FormKit
        type="password"
        label="Constraseña"
        name="password"
        placeholder="Contraseña de Usuario - Min 8 Caracteres"
        validation="required|length:8"
        :validation-messages="{
            required:'El password es obligatorio',
            length:'El password debe tener minimo 8 caracteres'
        }"
        />
        <FormKit
        type="password"
        label="Repetir Constraseña"
        name="password_confirm"
        placeholder="Repite la Contraseña"
        validation="required|confirm"
        :validation-messages="{
            required:'El password es obligatorio',
            confirm:'Los password no son iguales'
        }"
        />

        <FormKit
        type="submit"
        >
            Crear Cuenta
        </FormKit>
    </FormKit>
    </div>
</template>

<script setup>
import {inject} from 'vue'
import {reset} from '@formkit/vue'
import AuthAPI from '@/api/AuthAPI'

const toast = inject('toast')

const handleSumit= async ({password_confirm, ...formData})=>{
   try {
   const{data} = await AuthAPI.register(formData)
   toast.open({
    message:data.msg,
    type:'success'
    })
    reset('registerForm')
   } catch (error) {
    toast.open({
    message:error.response.data.msg,
    type:'error'
    })
   }
    
}
</script>