import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from '#pages/search-page.vue'
import ApartmentPage from '#pages/apartment-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: SearchPage },
    { path: '/apartment/:id', component: ApartmentPage },
  ],
})

export default router
