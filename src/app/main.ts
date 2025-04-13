import '#app/styles/global.scss'

// src/main.ts (подключение PrimeVue и глобальных компонентов)
import { createApp } from 'vue'
import App from './App.vue'
import router from '#app/router'
import PrimeVue from 'primevue/config'

import Aura from '@primeuix/themes/aura'

// Импорт часто используемых компонентов PrimeVue
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'
import Paginator from 'primevue/paginator'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })

// Глобальная регистрация компонентов PrimeVue
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Card', Card)
app.component('Paginator', Paginator)

app.mount('#app')
