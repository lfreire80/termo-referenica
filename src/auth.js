const AUTH_TOKEN = 'Bearer ' + getToken()
const USER = getUser()

function getToken(){
    const cookies = getAuthTokenFromCookie()
    return cookies[0].split('=')[1]
}

function getUser(){
    const cookies = getAuthTokenFromCookie()
    
    const perfil = cookies.filter(name => name.split('=')[0].trim() == "perfil")[0].split("=")[1]
    const user = cookies.filter(name => name.split('=')[0].trim() == "user")[0].split("=")[1]
    

    console.log(perfil, user)
    return {
        id: user,
        perfil : perfil
    }
}

function getAuthTokenFromCookie(){
    return document.cookie.split(';')
}

export { AUTH_TOKEN, USER }