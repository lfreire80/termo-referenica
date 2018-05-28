import { shallowMount } from '@vue/test-utils'
import ProfissionalPrazosField from './ProfissionalPrazosField'
import Vue from 'vue'
import Vuex from 'vuex'
import mockedState from '../specs/mockState'



describe('ProfissionalPrazosField', () =>{
   
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
            comentarios: [],
            somenteLeitura: ''
        }

        wrapper = shallowMount(ProfissionalPrazosField, {
            stubs: ['app-tooltip'],
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

    test('Botao btnShowComentarios deve ligar de desligar a flag showComentarios', () =>{
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

    test('Botao btnShowComentarios deve ter o texto "Comentarios N" onde N é o numero de comentarios',() => {
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

    test('Botao btnTooltipMsg deve ligar de desligar a flag internalShowTooltip', () =>{
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

    test('Metodo getProfs deve retornar uma linha para cada profissioal x suas parcelas', () => {
        let recebido = wrapper.vm.getProfs().length
        let esperado = wrapper.vm.termo.documento.profissionais.reduce((acc, cur) => {
            return acc + cur.parcelas.length
        }, 0)
        expect(recebido).toEqual(esperado)
    })

    test('Metodos getProfs deve retornar uma lista com os objetos corretos', () => {
        let recebido = Object.keys(wrapper.vm.getProfs()[0])
        let esperado = ['profissional', 'periodo', 'produto', 'parcelaNumero', 'valor']
         expect(recebido).toEqual(esperado)
    })

    test('Deve exibir uma tabela o periodo, produto, numero parcela e valor de cada profissional e parcelas',()=>{
        const profissionais = wrapper.vm.getProfs()
        const table = wrapper.findAll('.estimativa tbody tr' ).wrappers
        for(let row = 0; row < table.length; row++){
            let cols = table[row].findAll('td').wrappers
            expect(`Profissional ${profissionais[row].profissional.toString()}`).toEqual(cols[0].text())
            expect(profissionais[row].periodo.toString()).toEqual(cols[1].text())
            expect(profissionais[row].produto.toString()).toEqual(cols[2].text())
            expect(profissionais[row].parcelaNumero.toString()).toEqual(cols[3].text())
            expect(profissionais[row].valor.toString()).toEqual(cols[4].text())
        }
    })

    
})
