const AUTH_TOKEN = 'Bearer ' + getToken()
const USER = getUser()

function getToken(){
    const cookies = getAuthTokenFromCookie()
    const authCookie = cookies.filter( c => c.split('=')[0].trim() === 'authentication')
    if(authCookie.length > 0)
        return authCookie[0].split('=')[1]
    return []
}

function getUser(){
    const cookies = getAuthTokenFromCookie()
    //verifica se a propriedade user esta no cookie
    if(cookies.filter(n => n.indexOf('user') != -1).length > 0){
        const perfil = cookies.filter(name => name.split('=')[0].trim() == "perfil")[0].split("=")[1]
        const user = cookies.filter(name => name.split('=')[0].trim() == "user")[0].split("=")[1]
        return {
            id: user,
            perfil : perfil
        }
    }
    return null
}

function getAuthTokenFromCookie(){
    return document.cookie.split(';')
}

export { AUTH_TOKEN, USER }