import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import '@/assets/main.css'
import store from '@/store';
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import Flicking from "@egjs/vue3-flicking";
createApp(App).component("Flicking", Flicking).use(store).use(router).mount('#app')
