import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Modal from '../views/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path:'/modal',
    name:'Modal',
    component: Modal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ){
    next({
      path: "/",
      query:{
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router
