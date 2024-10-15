import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
const root: any = app.mount('#app');

declare global {
    interface Window {
        app: any;
    }
}

window.app = root;

