import axios from 'axios'

const url = 'http://192.168.1.31/FujbPortal.API/api/termoreferencia'

const GetAsync = async () => {
    let response = await axios.get(url)
    return response.data
}

const GetByIdAsync = async (id) => {
    let response = await axios.get(url + `/${id}`)
    return response.data
}

const SaveAsync = async (termo) => {
    let response = await axios.post(url, termo)
    return response.data
}

const UpdateAsync = async (termo) => {
    let response = await axios.put(url + `/${termo.numero}`)
    return response.data
}

export default{
    GetAsync,
    GetByIdAsync,
    SaveAsync,
    UpdateAsync
}