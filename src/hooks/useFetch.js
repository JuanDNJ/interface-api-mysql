import { useState } from "react"
const useFetch = (url) => {

    const USE_FECTH_STATE = {
        state: '',
        data: '',
        error: '' 
    }

    const [fetchState, setFetchState] = useState(USE_FECTH_STATE)

    const post = () => {}
    const get = () => {}
    const put = () => {}
    const remove = () => {}

    return [
        post,
        get,
        put,
        remove
    ]
}

export default useFetch