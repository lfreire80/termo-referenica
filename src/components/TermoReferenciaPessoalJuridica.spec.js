import { shallowMount } from '@vue/test-utils'
import TermoReferenciaPessoaJuridica from './TermoReferenciaPessoaJuridica'
import mockedState from './specs/mockState'
import Vue from 'vue'
import Vuex from 'vuex'


describe('TermoReferenciaPessoaJuridica', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferenciaPessoaJuridica, {
            store,
            methods:{
                loadTermos: () => {}
            }
        })
    })

    
    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Verifica estado inicial', () =>{
        const esperado =  {
            showObjeto: false,
            showJustificativa: false,
            showEspecificacao: false,
            showPrazo: false,
            showCondicoes: false,
            showCondicoesDeGarantia: false,
            showResponsavel: false,
            showQualificacao: false
        }

        expect(esperado).toEqual(wrapper.vm.tooltips)
    })

    test('Metodo getComentarios(campo) deve retornar os comentarios do termo', () => {
        expect(wrapper.vm.getComentarios('objeto').length).toBe(2)
        expect(wrapper.vm.getComentarios('especificacao').length).toBe(1)
        expect(wrapper.vm.getComentarios('produto').length).toBe(0)
    });

    test('Metodo addComentario dever emitir o evento addComentario', () => {
        wrapper.vm.addComentario('objeto')
        expect(wrapper.emitted().addComentario).toBeTruthy()
    })
})
