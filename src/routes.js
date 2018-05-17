import TermoReferenciaList from './components/TermoReferenciaList.vue'
import TermoReferencia from './components/TermoReferencia.vue'

const routes = [
    { path: '/', component: TermoReferenciaList },
    { path: '/:action/', component: TermoReferencia},
    { path: '/:action/:id', component: TermoReferencia}
    
]

export default routes