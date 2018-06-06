import { shallowMount } from '@vue/test-utils'
import TermoReferenciaPessoaFisica from './TermoReferenciaPessoaFisica'
import mockedState from './specs/mockState'
import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '../routes'


describe('TermoReferenciaPessoaFisica', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        Vue.use(VueRouter)

        const router = new VueRouter({
            routes,
            mode: 'history',
            base: '/termo-referencia/'
        })

        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferenciaPessoaFisica, {
            store,
            methods:{
                loadTermos: () => {}
            },
            router,
           
        })

    })

    
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
            showEstimativaCusto: false,
            showCondicoes: false,
            showObrigacoes: false,
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

    test('Quando btnAddProfissional deve chamar o metodo addProdissional', () => {
        const addProfissionalStub = sinon.stub()
        wrapper.vm.addProfissional = addProfissionalStub
        wrapper.find('#btnAddProfissional').trigger('click')
        expect(addProfissionalStub.called).toBeTruthy()

    })
})
