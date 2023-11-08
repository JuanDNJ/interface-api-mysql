const getToken = async () => JSON.parse(globalThis.localStorage.getItem('token')) ?? false
const removeToken = async () => {
    globalThis.localStorage.removeItem('token')
    return await getToken()
}
const setToken = async (payload) => {
    globalThis.localStorage.setItem('token', JSON.stringify(payload))
}
const URL_API = import.meta.env.VITE_URL_API


export {
    getToken,
    removeToken,
    setToken,
    URL_API
}