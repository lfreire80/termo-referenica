import TermoReferenciaList from './components/TermoReferenciaList.vue'
import TermoReferencia from './components/TermoReferencia.vue'

const routes = [
    { path: '/', component: TermoReferenciaList },
    { path: '/termo/:action/', component: TermoReferencia},
    { path: '/termo/:action/:id', component: TermoReferencia}
    
]

export default routes