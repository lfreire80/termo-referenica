import { shallowMount } from '@vue/test-utils'
import CadastroProfissional from './CadastroProfissional'
import mockedState from './specs/mockState'
import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'
import { wrap } from 'module';

describe('CadastroProfissional', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(CadastroProfissional, {
            store,
        })
    })

    beforeEach(() => {
        resetState()
    })

    const resetState = () => {
        wrapper.vm.profissional = {parcelas: []}
        wrapper.vm.profissional_selecionado = ''
        wrapper.vm.parcela = {
            periodo: '',
            produto: '',
            parcelaNumero: '',
            valor: ''
        }
    }
     
    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Verifica estado inicial do profissional', () => {
        let esperado = { parcelas: [] }
        let recebido = wrapper.vm.profissional
        expect(esperado).toEqual(recebido)
    })

    test('Verifica estado inicial da parcela', () => {
        let esperado = {
            periodo: '',
            produto: '',
            parcelaNumero: '',
            valor: ''
        }
        let recebido = wrapper.vm.parcela
        expect(esperado).toEqual(recebido)
    })

    test('Verifica estado inicial do profissional selecionado', () => {
        expect('').toEqual(wrapper.vm.profissional_selecionado)
    })

    test('addParcela deve adicionar uma parcela nao profissional', () => {
        wrapper.vm.addParcela()
        expect(1).toEqual(wrapper.vm.profissional.parcelas.length)

    })

    test('remover() deve remover parcela do profissional', () => {
        wrapper.vm.addParcela()
        wrapper.vm.remover(0)
        expect(0).toEqual(wrapper.vm.profissional.parcelas.length)
    })

    test('remover() nao pode gerar erro se nao tiver parcela cadastrada', () => {
        wrapper.vm.remover(0)
        expect(0).toEqual(wrapper.vm.profissional.parcelas.length)
    })

    test('addProfissional() deve adicionar um profissional a lista de profissionais e selecionar o mesmo', () => {
        const qtdProfissionaisAtual = wrapper.vm.termo.documento.profissionais.length
        wrapper.vm.addProfissional()
        const qtdProfissionaisNova = wrapper.vm.termo.documento.profissionais.length
        expect(qtdProfissionaisNova).toEqual(qtdProfissionaisAtual + 1);
        expect(qtdProfissionaisNova - 1).toEqual(wrapper.vm.profissional_selecionado);
    });

    test('removeProfissional() deve remover um profissional da lista de profissioanis ', () => {
        const qtdProfissionaisAtual = wrapper.vm.termo.documento.profissionais.length
        wrapper.vm.removeProfissional(0)
        const qtdProfissionaisNova = wrapper.vm.termo.documento.profissionais.length
        expect(qtdProfissionaisNova).toEqual(qtdProfissionaisAtual - 1);
    });

    test('selecionaProfissional deve carrega os dados do profissional selecionado', () => {
        wrapper.vm.profissional_selecionado = 1
        wrapper.vm.selecionaProfissional(2)
        expect(wrapper.vm.profissional).toEqual(wrapper.vm.termo.documento.profissionais[wrapper.vm.profissional_selecionado]);
    });

    test('copiarProfissional(index) deve copiar as informacoes e gerar novo profissional na lista', () => {
        const profissionalCopiado = wrapper.vm.termo.documento.profissionais[0]
        wrapper.vm.copiarProfissional(0)
        const ultimoProfissional = wrapper.vm.termo.documento.profissionais[wrapper.vm.termo.documento.profissionais.length - 1]
        expect(profissionalCopiado).toEqual(ultimoProfissional);
    });

    test('Ao clicar em btnaddProfissional o metodo addProfissional deve ser chamado', () => {
        const addProfissionalStub = sinon.stub()
        wrapper.setMethods({ addProfissional :addProfissionalStub})    
        wrapper.find('#btnaddProfissional').trigger('click')
        expect(addProfissionalStub.called).toBe(true)
    });


    test('Ao clicar em btnSelecinaProfissional o metodo selecioProfissional deve ser chamado', () => {
        const selecionaProfissionalStub = sinon.stub()
        wrapper.setMethods({ selecionaProfissional :selecionaProfissionalStub})    
        wrapper.find('#btnSelecionaProfissional').trigger('click')
        expect(selecionaProfissionalStub.called).toBe(true)
    });

    test('Ao clicar em btnCopiaProfissioanl o metodo copiarProfissional deve ser chamado', () => {
        const copiarProfissionalStub = sinon.stub()
        wrapper.setMethods({ copiarProfissional :copiarProfissionalStub})    
        wrapper.find('#btnCopiaProfissioanl').trigger('click')
        expect(copiarProfissionalStub.called).toBe(true)
    });

    test('Ao clicar em btnRemoveProfissional o metodo removeProfissional deve ser chamado', () => {
        const removeProfissionalStub = sinon.stub()
        wrapper.setMethods({ removeProfissional :removeProfissionalStub})    
        wrapper.find('#btnRemoveProfissional').trigger('click')
        expect(removeProfissionalStub.called).toBe(true)
    });

    test('Ao clicar em btnAddParcela o metodo AddParcela deve ser chamado', () => {
        const AddParcelaStub = sinon.stub()
        wrapper.setMethods({ addParcela :AddParcelaStub})    
        wrapper.find('#btnAddParcela').trigger('click')
        expect(AddParcelaStub.called).toBe(true)
    });

})