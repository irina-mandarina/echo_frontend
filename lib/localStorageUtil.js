export function getJWT() {
    if (process.client) {
        return localStorage.getItem('jwt');
    }
}

export function setJWT(jwt) {
    if (process.client) {
        localStorage.setItem('jwt', jwt)
    }
}

export function removeJWT() {
    if (process.client) {
        localStorage.removeItem('jwt');
    }
}