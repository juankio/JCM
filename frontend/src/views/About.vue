<template>
    <div>
        <h1 class="text-4xl font-bold text-white text-center my-8">Bienvenido a JCM FOTOS Y VIDEOS</h1>
        <div class="grid grid-cols-2 gap-8">
            <!-- Componente 1: Tamaño Pequeño -->
            <div class="bg-blue-900 text-white py-4 px-6 rounded-lg shadow-md text-left transform transition-transform hover:scale-105">
                <h1 class="text-3xl font-bold mb-2">Historia de JCM Fotos y Videos</h1>
                <p class="text-sm">JCM Fotos y Videos nace en 1990 de manera accidental cuando Juan Carlos, el fundador, intentaba vender cámaras fotográficas. 
                    Con tan buenos resultados al mostrar la calidad de las cámaras a través de las fotos, las personas comenzaron a contratarlo para tomar fotos en eventos, como partidos de fútbol y deportivos. 
                    Posteriormente, fue contratado por Llano 7 Días, donde trabajó con la casa editorial El Tiempo y publicó fotos de la Selección Colombia en el prestigioso diario. 
                    A raíz de ello, JCM Fotos y Videos comenzó a ser contratado para eventos como bautizos, matrimonios, comuniones y 15 años, con un enfoque especial en la fotografía de quinceañeras.
                    .</p>
                </div>
                
                <!-- Componente 2: Tamaño Mediano -->
                <div class="flex justify-center">
                    <!-- Primer componente -->
                    <div class="bg-teal-900 text-white py-6 px-8 rounded-lg shadow-md text-left mr-8 transform transition-transform hover:scale-105">
                    <h1 class="text-2xl font-bold mb-4">Servicios Adicionales</h1>
                    <ul class="text-left">
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2 text-white">local_parking</i>
                             Parqueadero
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2 text-white">wifi</i>
                            Wifi
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2 text-white">home</i>
                            Servicio a domicilio
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2 text-white">pets</i>
                            Se aceptan mascotas
                        </li>
                    </ul>
                </div>
                    <!-- Segundo componente -->
                    <div class="bg-green-900 text-white py-6 px-8 rounded-lg shadow-md text-left transform transition-transform hover:scale-105">
                        <h1 class="text-2xl font-bold mb-4">Formas de pago aceptadas</h1>
                        <ul class="text-left">
                        <li class="flex items-cente mb-2">
                            <i class="material-icons mr-2">credit_card</i> Tarjeta de crédito
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2">account_balance</i> Transferencia bancaria
                        </li>
                        <li class="flex items-center mb-2">
                            <i class="material-icons mr-2">attach_money</i> Pago en efectivo
                        </li>
                        <li class="flex items-center">
                            <i class="material-icons mr-2">phone_android</i> Pago móvil
                        </li>
                    </ul>
                    <p class="text-xs mt-4">Todos los pagos se realizarán en persona.</p>

                    </div>
                </div>
                
                <!-- Componente 3: Tamaño Normal -->
                <div>
                    
                    <div class="bg-purple-900 text-white py-8 px-10 rounded-lg shadow-md text-left transform transition-transform hover:scale-105">
                        <h1 class="text-2xl font-bold mb-4">Logros</h1>
                        <ul class="text-left">
                            <li class="flex items-center mb-2">
                                <i class="material-icons text-white mr-2">emoji_events</i> Primer lugar en concurso de fotografía
                            </li>
                            <li class="flex items-center mb-2">
                                <i class="material-icons text-white mr-2">emoji_events</i> Primer lugar en concurso de fotografía
                            </li>
                            <li class="flex items-center mb-2">
                                <i class="material-icons text-white mr-2">emoji_events</i> Primer lugar en concurso de fotografía

                            </li>
                            <!-- Agrega más logros si es necesario -->
                            
                        </ul>
                    </div>
                    
                    <!-- Componente 4: Tamaño Grande -->
                    <div class="bg-yellow-900 mt-6 text-white py-8 px-10 rounded-lg shadow-md text-left transform transition-transform hover:scale-105">
                        <h1 class="text-2xl font-bold mb-2">¡Contáctame!</h1>
                        <p class="text-lg mb-4">¡Conéctate conmigo en las redes sociales o envíame un correo electrónico!</p>
                        <div class="grid grid-cols-2 gap-4">
                        <div class="text-left">
                            <ul>
                                <a href="#">
                                    <li class="flex items-center mb-2">
                                        <font-awesome-icon class="mr-2" size="lg" :icon="['fab', 'facebook']" /> Facebook
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="flex items-center mb-2">
                                        <font-awesome-icon class="mr-2" size="lg" :icon="['fab', 'instagram']" /> Instagram
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div class="text-right">
                            <ul>
                                <a href="#">
                                    <li class="flex items-center mb-2">
                                        <font-awesome-icon class="mr-2" size="lg" :icon="['fab', 'twitter']" /> Twitter
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="flex items-center mb-2">
                                        <font-awesome-icon class="mr-2" size="lg" :icon="['fab', 'google']" /> Gmail
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    </div>

                    
                </div>
                <!-- Componente 5: Tamaño Extra Grande -->
                <div class="bg-red-900 py-8 px-10  text-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105">
                    <h1 class="text-4xl font-bold mb-2">Ubicación</h1>
                    <p class="text-sm">direccion.</p>
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.412017686479!2d-73.6367637251348!3d4.139079195834722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2f39f12f7857%3A0xc349c5399fae4104!2sUNIMINUTO%20Villavicencio!5e0!3m2!1ses!2sco!4v1710038198787!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>    
    </div>
</div>
</template>
  
  <script setup>
    // Aquí puedes agregar la lógica de tu componente si es necesario
    </script>
