import { useEffect, useState } from 'react';
import styles from './account.module.css'
import { Link } from 'react-router-dom';
import { getToken, setToken, removeToken } from '../../handlers';

const Account = () => {
 
    const [account, setAccount] = useState('')

    const handlerAddAccount = async () => {
        setAccount(() => setToken({ user: true }))
    }
    const handlerLogOut = () => {
        setAccount(() => removeToken())
    }
    useEffect(() => {
        getToken().then(token => {
            setAccount(() => token)
        })
       
    },[account])
    return (
        <section className={styles}>
            <span>{account === false ? <button onClick={handlerAddAccount}>
                Account
            </button> : <button onClick={handlerLogOut}>LogOut</button> }</span>
        </section>
    );
}
export default Account;