// Importa o Vue e o VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// Importa os componentes que serão usados como páginas
import Home from '../components/layouts/LayoutHome.vue'
import Analises from '../views/Analises.vue'
import Cadastro from '../views/Cadastro.vue'
import Historico from '../views/Historico.vue'
import Login from '../views/Login.vue'
import NovaSenha from '../views/NovaSenha.vue'
import Reembolsos from '../views/Reembolsos.vue'
import Solicitacoes from '../views/Solicitacoes.vue'


// Informa ao Vue que será usado o VueRouter
Vue.use(VueRouter)

// Cria uma constante com as rotas da aplicação
const routes = [
  // Cada objeto dentro do array representa uma rota
  // O objeto possui as propriedades path, name e component
  { path: '/', name: 'login',component: Login},

  { path: '/novasenha', name: 'novasenha',component: NovaSenha},

  { path: '/cadastro', name: 'cadastro', component: Cadastro},

  // Cria uma rota com um componente que será exibido na página
  {path: '/', component: Home, 
    // Cria rotas filhas
    children: [
      
      { path: 'reembolsos', name: 'reembolsos', component: Reembolsos},
      { path: 'analises', name: 'analises', component: Analises},
      { path: 'historico', name: 'historico', component: Historico},
      { path: 'solicitacoes', name: 'solicitacoes',component: Solicitacoes}
      
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
