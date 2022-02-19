import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay';
import Vue3Progress from "vue3-progress";

axios.defaults.baseURL="https://cursos-prueba.tk";

const options = {
    position: "fixed",
    height: "2px",
    // color: "<Your Color>",
  };
createApp(App)
.use(VueLoading)
.use(Vue3Progress, options)
.use(VueAxios, axios)
.use(store)
.use(router)

.mount('#app')
