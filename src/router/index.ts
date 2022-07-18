import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginComponent from '../components/LoginComponent';
import {RegistrationComponent} from '../components/RegistrationComponent';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/RegistrationComponent.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginComponent.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
