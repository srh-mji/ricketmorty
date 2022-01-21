import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Characters from '../views/Characters.vue'
import Locations from '../views/Locations.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
