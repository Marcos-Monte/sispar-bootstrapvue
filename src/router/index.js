// Importa o Vue e o VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// Importa os componentes que serão usados como páginas
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NovaSenha from '../views/NovaSenha.vue'
import Reembolsos from '../views/Reembolsos.vue'

// Informa ao Vue que será usado o VueRouter
Vue.use(VueRouter)

// Cria uma constante com as rotas da aplicação
const routes = [
  {path: '/', component: Login},
  {path: '/home', component: Home},
  {path: '/reembolsos', component: Reembolsos},
  {path: '/NovaSenha', component: NovaSenha},

]

// Cria uma constante com o roteador da aplicação
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
