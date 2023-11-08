import Header from '../includes/header'
import { apifetch } from '@/handlers/fetching'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import styles from './account.module.css'

function Account() {


    const { get } = apifetch
    const [view, setView] = useState('profile')
    const [account, setAccount] = useState({
        email: '',
        rol: '',
        name: ''
    })

    const selectView = (eve) => {
        eve.preventDefault();
        setView(() => eve.target.dataset.view)
    }

    useEffect(() => {
        get("/api/account").then(res => {
            console.log(res)
            setAccount(() => res && res.account)
        })
    }, [])

    return (
        <section>
            <Header />

            {account &&
                <article>
                    <header className={styles.hAccount}>
                        {/* <Button type="button" click={selectView} view="profile" style={'btnProfile'}>Profile</Button> */}
                        <button type='button' onClick={selectView} data-view="profile" className={styles.btnProfile}>Profile</button>
                        <button type='button' onClick={selectView} data-view="token" className={styles.btnToken}>View Token</button>
                    </header>

                    {view === 'profile' && <div>
                        <h2>Account profile</h2>
                        <strong style={{ color: account.rol === 'admin' ? 'skyblue' : 'lime' }}>{account.name.toUpperCase()}</strong>
                        <strong style={{ color: account.rol === 'admin' ? 'red' : 'skyblue' }}>{account.email}</strong>
                    </div>}
                    {view === 'token' && <div>
                        <h2>Token:</h2>
                        <p className={styles.code}>
                            {account.token}
                        </p>
                    </div>}


                </article>
            }
        </section>
    )
}

export default Account