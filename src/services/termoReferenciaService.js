import axios from 'axios'

const url = 'http://localhost/FujbPortal.API/api/termoreferencia'

const GetAsync = async () => {
    let response = await axios.get(url)
    return response.data
}

const GetByIdAsync = async (id) => {
    let response = await axios.get(url + `/${id}`)
    return response.data
}

const GetEmpty = async(id) => {
    let response = await axios.get(url + `/empty/${id}`)
    return response.data
}


const SaveAsync = async (termo) => {
    let response = await axios.post(url, termo)
    console.log('insert')
    return response.data
}

const UpdateAsync = async (termo) => {
    let response = await axios.put(url + `/${termo.numero}`, termo)
    console.log('update')
    return response.data
}

export default{
    GetAsync,
    GetByIdAsync,
    GetEmpty,
    SaveAsync,
    UpdateAsync
}