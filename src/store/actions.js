import axios from 'axios'
import { AUTH_TOKEN, USER } from '../auth'

const URL = 'http://localhost:49894/api/'
//const URL = 'https://portal.fujb.ufrj.br/FujbPortal.API/api/'

const URL_TERMO = URL + 'termoreferencia'
const URL_PROCESSO = URL + 'processo'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const loadTermos = async ({commit}, payload) => {
    let termos = (await axios.get(URL_TERMO)).data.data
    if(payload){
        termos = termos.filter(termo => termo.processo == payload)
    }
    commit('UPDATE_TERMOS', termos.sort((a,b) => a.numero - b.numero))
}

const updateTermo = ({commit}, payload) => {
    commit('UPDATE_TERMO', payload)
}

const updateUsuario = async ({commit}) => {
    const processos = (await axios.get(URL_PROCESSO)).data
    const payload = { idUsuario : USER.id, perfil: USER.perfil, processos : processos }
    commit('UPDATE_USUARIO', payload)
}


const clearTermo = ({commit}) => {
    commit('UPDATE_TERMO', {})
}

const loadTermo = async ({commit} ,id) => {
    const termo = (await axios.get(URL_TERMO + `/${id}`)).data.data
    commit('UPDATE_TERMO', termo)
}

const newTermo = async ({commit}, id) => {
    const  termo = (await axios.get(URL_TERMO + `/empty/${id}`)).data.data 
    commit('UPDATE_TERMO', termo)
}

const saveTermo = async ({state}) => {
    const termo = state.termo
    let response = ''
    if(!termo.numero){
        termo.status = 1 // novo
        response = await axios.post(URL_TERMO, termo)
    } else {
        response = await axios.put(URL_TERMO + `/${termo.numero}`, termo)
    }
    return response.data
}

const deleteTermo = async({},id) => {
    await axios.delete(URL_TERMO + `/${id}`)
}

const aprovaTermo = async({}, id) => {
    await axios.post(URL_TERMO + `/aprovar/${id}`)
}

const encaminhaTermo = async({}, id) => {
    await axios.post(URL_TERMO + `/encaminhar/${id}`)
}

const encaminhaParaRevisaoTermo = async({}, id) => {
    await axios.post(URL_TERMO + `/pararevisao/${id}`)
}

const baixaTermo = async({}, id) => {
    window.open(URL_TERMO + `/print/${id}`)
}

export default{
    loadTermos,
    updateTermo,
    clearTermo,
    loadTermo,
    newTermo,
    saveTermo,
    deleteTermo,
    updateUsuario,
    aprovaTermo,
    encaminhaTermo,
    encaminhaParaRevisaoTermo,
    baixaTermo
}
