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
        updateTermo: (state, payload) =>{
            console.log('mutation', payload)
            console.log(payload.modelo)
            state.termo = payload
        }
    },
    actions: {
        updateTermo({commit}, payload){
            commit('updateTermo', payload)
        }
    }
})