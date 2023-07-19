import { createRouter, createWebHistory } from 'vue-router'

//importamos store de vuex
import store from '../store'


import HomeView from '../views/HomeView.vue'


//VISTAS de Registro e inicio de sesion
import Registro from '../views/Registro.vue'
import InicioSesion from '../views/InicioSesion.vue'

//vistas del dashboard y mi cuenta
import Dashboard from '../views/dashboard/Dashboard.vue'
import MiCuenta from '../views/dashboard/MiCuenta.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //ruta de registrate
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },

  // ruta de inicio de sesion
  {
    path: '/iniciosesion',
    name: 'InicioSesion',
    component: InicioSesion
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //Dashboard
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },

  //ruta de mi cuenta
  {
    path: '/dashboard/micuenta',
    name: 'MiCuenta',
    component: MiCuenta,
    meta: {
      requireLogin: true
    }
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/iniciosesion')
  } else {
    next()
  }
})

export default router
