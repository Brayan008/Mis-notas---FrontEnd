import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es'
import 'bootstrap';
import './assets/css/styles.css'
import Inicio from './components/Inicio'
import AllNotas from './components/AllNotas'
import Nota from './components/Nota'
import CreateNotas from './components/CreateNotas'
import EditNota from './components/EditNota'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.use(VueMoment, {
  moment
});


const routes = [
  {path: '/', component: Inicio},
  {path: '/todas-notas', component: AllNotas},
  {path: '/nota/:id', name: 'nota', component: Nota},
  {path: '/editar/:id', name: 'edit', component: EditNota},
  {path: '/crear-nota', name: 'create', component: CreateNotas},
  {path: '/notas', component: Inicio},

]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
