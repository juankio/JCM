import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { useToast} from 'vue-toast-notification'
import config from '../formkit.config.js'

import App from './App.vue'
import router from './router'
import "vue-toast-notification/dist/theme-sugar.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';



library.add(fab);

const $toast = useToast({
    duration: 5000,
    position:'top-right'
})


const app = createApp(App)
app.provide('toast',$toast)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
