import { shallowMount } from '@vue/test-utils'
import App from './App'


describe('App', () =>{
    test('Componente é uma instancia Vue', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })
})
