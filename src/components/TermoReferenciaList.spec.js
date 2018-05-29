import { shallowMount } from '@vue/test-utils'
import TermoReferenciaList from './TermoReferenciaList'
import mockedState from './specs/mockState'
import sinon from 'sinon'
import Vue from 'vue'
import Vuex from 'vuex'
import { wrap } from 'module';
import { Tipos } from '../models/Tipos'
import { Status } from '../models/Status'
import { exec } from 'child_process';

describe('TermoReferenciaList', () =>{
   
    let state
    let store 
    let wrapper

    beforeAll(()=>{

        Vue.use(Vuex)
        state = mockedState
        store = new Vuex.Store({state})
        wrapper = shallowMount(TermoReferenciaList, {
            store,
            methods:{
                loadTermos: () => {}
            }
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

    test('Verifica se os tipos estão corretos conforme arquivo de Tipos', () => {
        expect(Tipos).toEqual(wrapper.vm.Tipos);
    });

    test('Verifica se os status estão corretos conforme aquivo de Status', () => {
        expect(Status).toEqual(wrapper.vm.Status);
    });

    test('Estado inicial do filtro deve ser false', () => {
        expect(wrapper.vm.filtroHabilitado).toBeFalsy()
    })
    
    test('mudaStatusTermo deve modificar o status do termo conforme parametros', () => {
        const lastTermo = wrapper.vm.termos[wrapper.vm.termos.length - 1]
        wrapper.vm.mudaStatusTermo(lastTermo.numero, 4)
        expect(4).toEqual(lastTermo.status);
    });
})