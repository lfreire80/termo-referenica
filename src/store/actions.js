import axios from 'axios'
import { AUTH_TOKEN, USER } from '../auth'

const URL_TERMO = 'http://192.168.1.31/FujbPortal.API/api/termoreferencia'
const URL_PROCESSO = 'http://192.168.1.31/FujbPortal.API/api/processo'


axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const loadTermos = async ({commit}) => {
    const termos = (await axios.get(URL_TERMO)).data.data
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
    console.log(termo.revisoes)
    let response = ''
    if(!termo.numero){
        response = await axios.post(URL_TERMO, termo)
    } else {
        response = await axios.put(URL_TERMO + `/${termo.numero}`, termo)
    }
    return response.data
}

const deleteTermo = async({},id) => {
    console.log('DELETE_TERMO', id)
    await axios.delete(URL_TERMO + `/${id}`)
}

export default{
    loadTermos,
    updateTermo,
    clearTermo,
    loadTermo,
    newTermo,
    saveTermo,
    deleteTermo,
    updateUsuario
}
