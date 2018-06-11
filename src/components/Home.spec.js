import { shallowMount } from '@vue/test-utils'
import Home from './Home'
import sinon from 'sinon'
import { wrap } from 'module';



describe('Home', () =>{
    
    let wrapper
    
    beforeAll(() => {
        wrapper = shallowMount(Home,{
            stubs: ['router-link'],
            methods: {
                updateUsuario: () => {}
            }
        })
    })

    test('Componente é uma instancia Vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Estado Incial', () => {
        const esperado = ['AuthToken']
        const recebido = Object.keys(wrapper.vm.$data)
        expect(esperado).toEqual(recebido)
    })

    test('Quando token de autenticacao for nao for encontrado, deve enviar para tela de login', () => {

        const sendToLoginPageStub = sinon.stub()
        wrapper.setMethods({ sendToLoginPage : sendToLoginPageStub })
        wrapper.setData({
            AuthToken: 'Bearer undefined'
        }) 
        wrapper.vm.checkCredenctials()
        expect(sendToLoginPageStub.called).toBe(true)        
    })

    test('Quando token de autenticacao for for encontrado, deve dar update do state User', () => {

        const updateUsuarioStob = sinon.stub()
        wrapper.setMethods({ updateUsuario : updateUsuarioStob })
        wrapper.setData({
            AuthToken: 'Bearer 242CSDC@#$@DS23'
        }) 
        wrapper.vm.checkCredenctials()
        expect(updateUsuarioStob.called).toBe(true)        
    })

    
    
})
