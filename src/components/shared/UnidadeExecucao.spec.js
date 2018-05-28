import { shallowMount } from '@vue/test-utils'
import UnidadeExecucao from './UnidadeExecucao'
import Vue from 'vue'
import Vuex from 'vuex'
import mockedState from '../specs/mockState'

describe('UnidadeExecucao', () =>{

    let wrapper
    let state 
    let store

    beforeAll(() => {

        Vue.use(Vuex)

        state = mockedState

        store = new Vuex.Store({state}) 

        wrapper = shallowMount(UnidadeExecucao, {
            state,
            store
        })
    })

    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

})
