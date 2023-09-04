const getToken = async () => globalThis.localStorage.getItem('token') ?? false
const removeToken = async () => {
    globalThis.localStorage.removeItem('token')
    return await getToken()
}
const setToken = async (payload) => {
    globalThis.localStorage.setItem('token', JSON.stringify(payload))
    return await getToken()
}

export {
    getToken,
    removeToken,
    setToken
}