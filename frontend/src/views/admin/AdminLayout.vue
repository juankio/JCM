<template>
    <div>

        <div class="flex justify-between">
            <div>
                <h1 class="text-2xl lg:text-6xl font-black text-white">JCM Fotos y Videos</h1>
                <h2 class="text-xl mt-3 lg:text-2xl font-black text-white">Panel de Administraccion</h2>
            </div>
            <div class="flex flex-col soace-y-5">
                <div class="flex gap-2 items-center">
                    <p class="text-white text-right">Hola: {{ user.getUserName }}</p>
                    <button
                    type="button"
                    class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                    @click="user.logout"
                    >
                    Cerrar Session
                </button>
            </div>
        </div>
    </div>
    <main class="space-y-6">
        <RouterView ></RouterView>
    </main>
    
</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
 const user = useUserStore()
</script>

<style lang="scss" scoped>

</style>