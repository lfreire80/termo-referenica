const AUTH_TOKEN = 'Bearer ' + getAuthTokenFromCoook()

function getAuthTokenFromCoook(){
    const cookie = document.cookie;
    return cookie.split('=')[1];
}

export { AUTH_TOKEN }