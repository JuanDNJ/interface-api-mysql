import { URL_API } from ".";
const headers = new Headers()
headers.set("Content-Type", "application/json")
headers.set("authorization", `Bearer ${JSON.parse(globalThis.localStorage.getItem('token'))}`)

const post = async (url, payload) => {

    try {
        const f = await fetch(`${URL_API}${url}`, {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: JSON.stringify(payload)
        })
        if (f.ok) {
            return await f.json()
        } else {
            throw new Error(f.statusText)
        }
    } catch (error) {
        console.error(error)
    }

}
const get = async (url) => {

    try {
        const f = await fetch(`${URL_API}${url}`, {
            method: "GET",
            headers: headers
        })
        return await f.json()
    } catch (error) {
        console.error(error)
    }

}
const put = async (url, body = {}) => {
    return await fetch(`${URL_API}${url}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body)
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