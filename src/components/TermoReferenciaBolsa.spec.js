import { shallowMount } from '@vue/test-utils'
import TermoReferenciaBolsa from './TermoReferenciaBolsa'
import mockedState from './specs/mockState'
import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'

describe('TermoReferenciaBolsa', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferenciaBolsa, {
            store,
            methods:{
                loadTermos: () => {}
            },
            //stub: ['app-document-field']
        })
    })

    beforeEach(() => {
        resetState()
    })

    const resetState = () => {
        wrapper.vm.filtroHabilitado = false
    }
     
    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Verifica estado inicial', () =>{
        const esperado =  {
            showObjeto: false,
            showJustificativa: false,
            showCriterio: false,
            showEspecificacao: false,
            showProduto: false,
            showApresentacao: false,
            showPrazo: false,
            showResponsabilidade: false,
            showValor: false,
            showObrigacoesConcedente: false,
            showObrigacoesBolsista: false,
            showFonte: false
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
