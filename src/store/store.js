import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listaUsuarios: [],
        usuarioLogado: {},
    },

    getters: {
        usuarios(state){
            return state.listaUsuarios
        },

        usuario(state){
            return state.usuarioLogado
        }
    },

    mutations: {
        criarUsuario(state, payload){
            state.listaUsuarios.push(payload)
        },

        criarLogin(state, payload){
            state.usuarioLogado = payload
        },

        removerLogin(state){
            state.usuarioLogado = {}
        }
    },

    actions: {
        criarNovoUsuario(context, payload){
            try {
                context.commit('criarUsuario', payload)
            } catch (error) {
                console.error('Não foi possível adicionar o usuario: ', error)
            }
        },

        criarNovoLogin(context, payload){
            try {
                context.commit('criarLogin', payload)
            } catch (error) {
                console.error('Não foi possível criar um novo login de usuario: ', error)
            }
        },

        deslogarUsuario(context){
            try {
                context.commit('removerLogin')
            } catch (error) {
                console.error('Erro ao deslogar o usuário: ', error)
            }
        }
    }
})
