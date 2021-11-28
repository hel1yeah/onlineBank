import { createApp } from 'vue'; // c
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/theme/theme.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
