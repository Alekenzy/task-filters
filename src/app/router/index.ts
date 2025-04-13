import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from '#pages/SearchPage.vue'
import ApartmentPage from '#pages/ApartmentPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: SearchPage },
    { path: '/apartment/:id', component: ApartmentPage },
  ],
})

export default router
