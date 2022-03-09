import App from '@/App.vue';
import { createApp } from 'vue';
import store from '@/store';
import router from '@/routes';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#root');
