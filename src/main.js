import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './tailwind.css'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

// Register with global config
app.use(VueToast)

app.use(VueSweetalert2)

app.use(router)
app.mount('#app')
