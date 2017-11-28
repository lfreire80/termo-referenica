import axios from 'axios'

const url = 'http://192.168.1.31/FujbPortal.API/api/termoreferencia'

const loadTermos = async ({commit}) => {
    const termos = (await axios.get(url)).data.data
    commit('UPDATE_TERMOS', termos.sort((a,b) => a.numero - b.numero))
}

const updateTermo = ({commit}, payload) => {
    commit('UPDATE_TERMO', payload)
}

const clearTermo = ({commit}) => {
    commit('UPDATE_TERMO', {})
}

const loadTermo = async ({commit} ,id) => {
    const termo = (await axios.get(url + `/${id}`)).data.data
    commit('UPDATE_TERMO', termo)
}

const newTermo = async ({commit}, id) => {
    const  termo = (await axios.get(url + `/empty/${id}`)).data.data
    console.log(termo)
    commit('UPDATE_TERMO', termo)
}

const saveTermo = async ({state}) => {
    const termo = state.termo
    let response = ''
    if(!termo.numero){
        response = await axios.post(url, termo)
    } else {
        response = await axios.put(url + `/${termo.numero}`, termo)
    }
    return response.data
}

export default{
    loadTermos,
    updateTermo,
    clearTermo,
    loadTermo,
    newTermo,
    saveTermo
}