import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/shared/store';

import './assets/style/main.scss'
// import './shared/types'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
