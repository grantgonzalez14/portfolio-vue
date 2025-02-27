import { createApp } from 'vue';
import App from './App.vue';
import Primevue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(Primevue, {
    theme: {
        preset: Aura
    }
});

const root: any = app.mount('#app');

declare global {
    interface Window {
        app: any;
    }
}

window.app = root;

