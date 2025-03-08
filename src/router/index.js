// Importa o Vue e o VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// Importa os componentes que serão usados como páginas
import Home from '../components/layouts/LayoutHome.vue'
import Cadastro from '../views/Cadastro.vue'
import Login from '../views/Login.vue'
import NovaSenha from '../views/NovaSenha.vue'
import Reembolsos from '../views/Reembolsos.vue'


// Informa ao Vue que será usado o VueRouter
Vue.use(VueRouter)

// Cria uma constante com as rotas da aplicação
const routes = [

  { path: '/', name: 'login',component: Login},

  { path: '/novasenha', name: 'novasenha',component: NovaSenha},

  { path: '/cadastro', name: 'cadastro', component: Cadastro},

  {path: '/', component: Home, 

    children: [
      
      { path: 'reembolsos', name: 'reembolsos',component: Reembolsos},
      
    ]

  }, 

]

// Cria uma constante com o roteador da aplicação
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
