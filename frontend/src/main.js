//import './assets/main.css'

// Importar CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@/assets/css/volt.css'
import '@/assets/js/volt.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
