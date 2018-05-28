import { shallowMount } from '@vue/test-utils'
import UnidadeExecucao from './UnidadeExecucao'
import Vue from 'vue'
import Vuex from 'vuex'

describe('UnidadeExecucao', () =>{

    let wrapper
    let state 
    let store

    beforeAll(() => {

        Vue.use(Vuex)

        state = {
            termo: {
                documento: {
                    unidadeExecucao: {
                        gerencia: 'gerencia teste',
                        tel: 'tes teste',
                        email: 'email teste',
                        endereco: 'endereco teste',
                        cep: 'cep teste',

                        tecUnidade: 'tex unidade teste',
                        tecDepartamento: 'tecDepartamento teste',
                        tecTelefone: 'tectelefone teste',
                        tecEmail: 'tecEmail teste',
                        tecEndereco: 'tecEndereco teste'
                    }
                }
            }
        }

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
