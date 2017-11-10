import TermoReferenciaList from './components/TermoReferenciaList.vue'
import TermoReferencia from './components/TermoReferencia.vue'

const routes = [
    { path: '/', component: TermoReferenciaList },
    { path: '/termo/:id', component: TermoReferencia}
]

export default routes