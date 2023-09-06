import Header from '../includes/header'
import { apifetch } from '../../handlers/fetching'
import { useEffect } from 'react'
function Account() {

    const {get} = apifetch

    useEffect(() => {
        get("/profile").then(res => {
            console.log(res)
        })
    }, [])

    return (
        <section>
            <Header />
            <div>
                Aqui podremos ver el token para poder utilarlo en nuestra app
            </div>
        </section>
    )
}

export default Account