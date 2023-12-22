import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
// ✅ works because the pinia instance is now active
app.mount('#app')


