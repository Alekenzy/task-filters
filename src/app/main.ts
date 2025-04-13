import '#app/styles/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from '#app/router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })

app.mount('#app')
