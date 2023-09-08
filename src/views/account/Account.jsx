import Header from '../includes/header'
import { apifetch } from '@/handlers/fetching'
import { useEffect, useState } from 'react'

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
        get("/profile").then(res => {
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
                        <pre className={styles.code}>
                            {account.token}

                        </pre>
                    </div>}


                </article>
            }
        </section>
    )
}

export default Account