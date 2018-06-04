import { shallowMount } from '@vue/test-utils'
import TermoReferencia from './TermoReferencia'
import mockedState from './specs/mockState'
import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from '../routes'
import Tipos from '../models/Tipos.js'
import _ from 'lodash'


describe('TermoReferencia', () =>{
   
    let state
    let store 
    let wrapper

    beforeEach(()=>{

        Vue.use(Vuex)
        Vue.use(VueRouter)

        const router = new VueRouter({
            routes,
            mode: 'history',
            base: '/Portal/termo-referencia/'
        })

        state = _.cloneDeep(mockedState)
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferencia, {
            store,
            router,
            methods:{
                loadTermos: () => {}
            },
            stubs:['textarea-autosize']
        })

        window.alert = sinon.stub()
    })

    
    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('O estado do selectedTipo deve ser 1', () =>{
        expect(1).toEqual(wrapper.vm.$data.selectedTipo)
    })

    test('O metodo valida processo deve retornar verdadeiro se usuario puder usar o processo', () => {
        state.termo.processo = 2
        expect(wrapper.vm.validaProcesso()).toBeTruthy()
    })

    test('O metodo valida processo deve retornar false se usuario nao puder usar o processo', () => {
        state.termo.processo = 10
        expect(wrapper.vm.validaProcesso()).toBeFalsy()
    })

    test('Quando o evento blur do campo txtProcesso for acionado o metodo preencher processo dve ser chamado', () => {
        const preencheDadosProcessoStub = sinon.stub()
        wrapper.vm.preencheDadosProcesso = preencheDadosProcessoStub
        wrapper.find('#processo').trigger('blur')
        expect(preencheDadosProcessoStub.called).toBe(true)
    })
})
