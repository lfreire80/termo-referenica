const AUTH_TOKEN = 'Bearer ' + getToken()
const USER = getUser()

function getToken(){
    const cookies = getAuthTokenFromCookie()
    return cookies[0].split('=')[1]
}

function getUser(){
    const cookies = getAuthTokenFromCookie()
    return {
        id: cookies[1].split('=')[1],
        perfil : cookies[2].split('=')[1]
    }
}

function getAuthTokenFromCookie(){
    return document.cookie.split(';')
}

export { AUTH_TOKEN, USER }