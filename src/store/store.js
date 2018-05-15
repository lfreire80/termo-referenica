import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        termo: {
            documento: {
                profissionais: []
            }
        },
        termos: [],
        usuario: {
            processos: []
        },
       
    },
    mutations: {
        'UPDATE_TERMO': (state, payload) => state.termo = payload,
        'UPDATE_TERMOS': (state, payload) => state.termos = payload,
        'UPDATE_USUARIO': (state, payload) => state.usuario = payload
    },
    actions
})