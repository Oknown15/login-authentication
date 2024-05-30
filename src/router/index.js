import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/SignUp.vue';
import Login from '../views/LoginAuth.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/Login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/LoginAuth.vue')
  // }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
