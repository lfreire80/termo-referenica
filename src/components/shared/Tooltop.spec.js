import { shallowMount } from '@vue/test-utils'
import Tooltip from './Tooltip'

describe('Tooltip', () =>{
    
    test('Componente é uma instancia Vue', () => {
        const wrapper = shallowMount(Tooltip)
        expect(wrapper.isVueInstance()).toBeTruthy()    
    })

    test('Tooltip possui 3 propriedades ["bdColor" , "bgColor", "show"]', ()=>{
        const esperadas = ['bdColor' , 'bgColor', 'show']
        const wrapper = shallowMount(Tooltip)
        const recebidas = Object.keys(wrapper.vm.$props)
        expect(recebidas).toEqual(esperadas)
    })

    test('Tooltip  deve aparecer se propriedade show estiver true', () => {
        const wrapper = shallowMount(Tooltip, {
            propsData: {
                show: true
            }
        })
        expect(wrapper.find('#tooltipDiv').exists()).toBe(true)
    })

    test('Tooltip nao deve aparecer se propriedade show estiver false', () => {
        const wrapper = shallowMount(Tooltip, {
            propsData: {
                show: false
            }
        })
        expect(wrapper.find('#tooltipDiv').exists()).toBe(false)
    })
})
