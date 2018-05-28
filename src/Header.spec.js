import { shallowMount, RouterLinkStub} from '@vue/test-utils'
import Header from './Header'

describe('Header', () =>{
    test('Componente é uma instancia Vue', () => {
        const wrapper = shallowMount(Header, {
            stubs: ['router-link']
        })
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Router link inicio deve levar para pagina inicial', () =>{
        const wrapper = shallowMount(Header, {
            stubs: {
                RouterLink : RouterLinkStub
            }
        })
        expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    })
})
