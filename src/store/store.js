import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        termo: {
            processo:'',
            documento: {},
            revisoes: [],
            modelo: {}
        }
    },
    getters: {
        termo: state => {
            return state.termo
        }
    },
    mutations: {
        'UPDATE_TERMO': (state, payload) =>{
            console.log("motation called")
            state.termo = payload
        }
    },
    actions: {
        updateTermo({commit}, payload){
            console.log("actions called")
            commit('UPDATE_TERMO', payload)
        }
    }
})