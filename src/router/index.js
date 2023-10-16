import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Seance1 from '../views/Seance1.vue'
import Pays from '../views/Pays.vue'
import FichePays from '../views/FichePays.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/seance/1',
      component: Seance1
    },
    {
      path: '/pays',
      component: Pays
    },
    {
      path: '/pays/:pays',
      component: FichePays,
    }
  ]
})

export default router