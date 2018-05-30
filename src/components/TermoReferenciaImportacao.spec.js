import { shallowMount } from '@vue/test-utils'
import TermoReferenciaImportacao from './TermoReferenciaImportacao'
import mockedState from './specs/mockState'
import Vue from 'vue'
import Vuex from 'vuex'

describe('TermoReferenciaImportacao', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferenciaImportacao, {
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
            showContextualizacao: false,
            showMaterial: false,
            showLocal: false,
            showJuntadaDocumento: false,
            showFonte: false,
            showJustificativa: false
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
