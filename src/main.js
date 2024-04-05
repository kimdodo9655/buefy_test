import { createApp } from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.css';
import 'bulma/css/bulma.css'
import './assets/css/custom_bulma.css'
import './assets/css/layout.css'

const app = createApp(App);

app.use(Buefy);
app.mount('#app');
