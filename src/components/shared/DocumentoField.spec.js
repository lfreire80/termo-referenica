import { shallowMount } from '@vue/test-utils'
import DocumentoField from './DocumentoField'
import Vue from 'vue'
import Vuex from 'vuex'
import mockedState from '../specs/mockState'


describe('DocumentoField', () =>{
   
    let state
    let store 
    let data
    let wrapper
    let propsData

    beforeAll(()=>{

        Vue.use(Vuex)

        state = mockedState

        store = new Vuex.Store({state})

        propsData = {
            titulo: '',
            showTooltip: '',
            tooltipMsg: '',
            value: '',
            comentarios: [],
            somenteLeitura: ''
        }

        wrapper = shallowMount(DocumentoField, {
            stubs: ['app-tooltip', 'textarea-autosize'],
            store,
            propsData

        })

    })
   
    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Propriedades estao corretas',() => {
        const esperadas = [
            'somenteLeitura',
            'comentarios',
            'value',
            'tooltipMsg',
            'showTooltip',
            'titulo']
        const recebidas = Object.keys(wrapper.vm.$props)
        expect(recebidas).toEqual(esperadas)
        
    })

    test('Estado Incial', () => {
        const esperadas = [
            'showComentarios',
            'internalValue',
            'internalShowTooltip'
        ]
        const recebidas = Object.keys(wrapper.vm.$data)
        expect(recebidas).toEqual(esperadas)
    })

    test('Botao btnAddComentario deve estar visivel para usuario do perfil 6', () =>{
        state.usuario.perfil = 6
        expect(wrapper.find('#btnAddComentario').exists()).toBe(true)
    })

    test('Botao btnAddComentario nao deve estar visivel para usuario do perfil 6', () =>{
        state.usuario.perfil = 1
        expect(wrapper.find('#btnAddComentario').exists()).toBe(false)
    })

    test('Botao brtAddComentario deve disparar evento addComentario quando for clicado', () => {
        state.usuario.perfil = 6
        wrapper.find('#btnAddComentario').trigger('click')
        expect(wrapper.emitted().addComentario).toBeTruthy()
    })

    test('Botao btnShowComentario deve ficar visivel se tiver algum comentario', () => {
        wrapper.vm.comentarios = ['teste']
        expect(wrapper.find('#btnShowComentarios').exists()).toBe(true)   
    })

    test('Botao btnShowComentario deve ficar invisivel se nao tiver algum comentario', () => {
        wrapper.vm.comentarios = []
        expect(wrapper.find('#btnShowComentarios').exists()).toBe(false)   
    })

    test('Botal btnShowComentarios deve ligar de desligar a flag showComentarios', () =>{
        wrapper.vm.comentarios = ['teste']
        wrapper.setData({
            showComentarios: false
        })
        let btnShowComentario = wrapper.find('#btnShowComentarios')
        btnShowComentario.trigger('click')
        expect(wrapper.vm.showComentarios).toBeTruthy()
        btnShowComentario.trigger('click')
        expect(wrapper.vm.showComentarios).toBeFalsy()
    })

    test('Botal btnShowComentarios deve ter o texto "Comentarios N" onde N é o numero de comentarios',() => {
        wrapper.vm.comentarios = ['comentario 1', 'comentario 2']
        expect(wrapper.find('#btnShowComentarios').text()).toBe(`Comentários 2`)
    })

    test('Botao btnTooltipMsg deve ficar visivel se tiver algum tooltipMsg', () => {
        wrapper.vm.tooltipMsg = 'teste'
        expect(wrapper.find('#btnTooltipMsg').exists()).toBe(true)   
    })

    test('Botao btnTooltipMsg deve ficar invisivel se nao tiver algum tooltipMsg', () => {
        wrapper.vm.tooltipMsg = ''
        expect(wrapper.find('#btnTooltipMsg').exists()).toBe(false)   
    })

    test('Botal btnTooltipMsg deve ligar de desligar a flag internalShowTooltip', () =>{
        wrapper.vm.tooltipMsg = 'teste'
        wrapper.setData({
            internalShowTooltip: false
        })
        let btnTooltipMsg = wrapper.find('#btnTooltipMsg')
        btnTooltipMsg.trigger('click')
        expect(wrapper.vm.internalShowTooltip).toBeTruthy()
        btnTooltipMsg.trigger('click')
        expect(wrapper.vm.internalShowTooltip).toBeFalsy()
    })
})
