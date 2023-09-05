import { getToken, URL_API } from ".";
const token = await getToken()
const headers = new Headers()
headers.set("Content-Type", "application/json")
headers.set("authorization", `Bearer ${token}`)

const post = async (url, payload) => {

    const f = await fetch(`${URL_API}${url}`, {
        method: "POST",
        mode: "cors",
        headers: headers,
        body: JSON.stringify(payload)
    })
    return await f.json()
}
const get = async (url) => {

    const f = await fetch(`${URL_API}${url}`, {
        method: "GET",
        headers: headers
    })
    return await f.json()
}
const put = async (url, body = {}) => {
    return await fetch(`${URL_API}${url}`, {
        method: "PUT",
        headers: headers,
        body: Object.keys().length ? JSON.stringify(body) : undefined
    })
}
const remove = async (url) => {
    return await fetch(`${URL_API}${url}`, {
        method: "DELETE",
        headers
    })
}

export const apifetch = {
    post,
    get,
    put,
    remove
}