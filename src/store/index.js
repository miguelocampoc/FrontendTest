
import { createStore } from 'vuex'
//import moduleUsuario from './modules/moduleUsuario.js'
export default createStore({
  state: {
    'ruta':'',
    auth:null,
    rutas:{
      'dashboard':false,
      'prestamos':false,
      'libros':false,
      'usuarios':false,
      'reservar':false,
    }
  },
  mutations: {
    setAuth(state,auth){
       state.auth=auth;
    }
  },
  actions: {
    setAuth({commit}){
      if(localStorage.getItem('auth')){
        commit('setAuth',JSON.parse(localStorage.getItem('auth')))
      }
    }
  },
  modules: {
 // user:moduleUsuario
  }
})
