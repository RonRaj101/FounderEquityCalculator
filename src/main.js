import { createApp } from 'vue'
import { defineStore } from 'pinia'

import App from './App.vue'

export const useStore = defineStore('main', {
    state: () => ({
        founders: [],
    }),
    actions: {
        increment() {
            this.count++
        },
    },  
});

createApp(App).mount('#app')
